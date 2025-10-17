'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@techequitas.org', 'donations@techequitas.org'],
      description: 'We typically respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', '(555) 123-4568 (Donations)'],
      description: 'Monday - Friday, 9 AM - 5 PM',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Community Street', 'Tech City, State 12345'],
      description: 'Open Monday - Saturday',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9 AM - 5 PM', 'Saturday: 10 AM - 2 PM'],
      description: 'Closed Sundays and holidays',
    },
  ];

  const subjects = [
    'General Inquiry',
    'Device Donation',
    'Workshop Registration',
    'Volunteer Opportunities',
    'Partnership Proposal',
    'Technical Support',
    'Media Inquiry',
    'Other',
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
        <div className="max-w-md mx-auto px-4">
          <Card padding="lg" className="text-center">
            <div className="mb-6">
              <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Send className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-600">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
            </div>
            <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs, want to volunteer, or need help with a donation? 
            We'd love to hear from you and help in any way we can.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center" padding="lg">
                  <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <Card padding="lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
                <Card padding="sm" className="overflow-hidden">
                  {/* Google Maps Placeholder */}
                  <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">Interactive Map</p>
                      <p className="text-gray-500 text-sm">123 Community Street, Tech City</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card padding="lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">General Inquiries</span>
                    <span className="font-medium text-primary">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Donation Requests</span>
                    <span className="font-medium text-primary">Within 48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Workshop Questions</span>
                    <span className="font-medium text-primary">Same day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Urgent Matters</span>
                    <span className="font-medium text-primary">Within 4 hours</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions and answers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card padding="lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What devices do you accept?
              </h3>
              <p className="text-gray-600">
                We accept laptops, desktops, tablets, smartphones, monitors, and accessories. 
                Devices should be less than 10 years old and in working condition.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do I schedule a pickup?
              </h3>
              <p className="text-gray-600">
                Use our donation form or call us directly. We'll schedule a convenient pickup time 
                within 2-3 business days of your request.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are workshops really free?
              </h3>
              <p className="text-gray-600">
                Yes! All our workshops are completely free thanks to our donors and volunteers. 
                We believe technology education should be accessible to everyone.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How can I volunteer?
              </h3>
              <p className="text-gray-600">
                We need volunteers for device refurbishment, workshop instruction, and community outreach. 
                Contact us to learn about current opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}