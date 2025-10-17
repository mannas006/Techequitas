'use client';

import { useState } from 'react';
import { Upload, Smartphone, Laptop, Monitor, Tablet, Camera, Headphones } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    deviceType: '',
    deviceCondition: '',
    pickupAddress: '',
    devicePhoto: null as File | null,
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const deviceTypes = [
    { value: 'laptop', label: 'Laptop', icon: Laptop },
    { value: 'desktop', label: 'Desktop Computer', icon: Monitor },
    { value: 'tablet', label: 'Tablet', icon: Tablet },
    { value: 'smartphone', label: 'Smartphone', icon: Smartphone },
    { value: 'monitor', label: 'Monitor', icon: Monitor },
    { value: 'accessories', label: 'Accessories', icon: Headphones },
  ];

  const conditions = [
    { value: 'excellent', label: 'Excellent - Like new, minimal wear' },
    { value: 'good', label: 'Good - Some wear but fully functional' },
    { value: 'fair', label: 'Fair - Shows wear, may need minor repairs' },
    { value: 'poor', label: 'Poor - Significant wear, needs repair' },
    { value: 'unknown', label: 'Unknown - Not sure of condition' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, devicePhoto: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
        <div className="max-w-md mx-auto px-4">
          <Card padding="lg" className="text-center">
            <div className="mb-6">
              <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600">
                Your donation request has been submitted successfully. We'll contact you within 2-3 business days to arrange pickup.
              </p>
            </div>
            <Button onClick={() => setSubmitted(false)}>Submit Another Donation</Button>
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Donate Your Device</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Give your old technology a new purpose. Every device you donate can transform someone's life 
            by providing access to education, employment opportunities, and essential services.
          </p>
        </div>
      </section>

      {/* Donation Process */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center" padding="lg">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fill Out Form</h3>
              <p className="text-gray-600">Tell us about the device you'd like to donate and provide pickup details.</p>
            </Card>

            <Card className="text-center" padding="lg">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Schedule Pickup</h3>
              <p className="text-gray-600">Our team will contact you to arrange a convenient pickup time.</p>
            </Card>

            <Card className="text-center" padding="lg">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Gets New Life</h3>
              <p className="text-gray-600">We refurbish your device and donate it to someone in need.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card padding="lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Device Donation Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
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

              {/* Device Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Device Type *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {deviceTypes.map((device) => {
                    const Icon = device.icon;
                    return (
                      <label
                        key={device.value}
                        className={`relative cursor-pointer p-4 border-2 rounded-lg transition-all duration-200 ${
                          formData.deviceType === device.value
                            ? 'border-primary bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="deviceType"
                          value={device.value}
                          checked={formData.deviceType === device.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <Icon className={`h-8 w-8 mx-auto mb-2 ${
                            formData.deviceType === device.value ? 'text-primary' : 'text-gray-400'
                          }`} />
                          <span className={`text-sm font-medium ${
                            formData.deviceType === device.value ? 'text-primary' : 'text-gray-700'
                          }`}>
                            {device.label}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Device Condition */}
              <div>
                <label htmlFor="deviceCondition" className="block text-sm font-medium text-gray-700 mb-2">
                  Device Condition *
                </label>
                <select
                  id="deviceCondition"
                  name="deviceCondition"
                  required
                  value={formData.deviceCondition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select condition</option>
                  {conditions.map((condition) => (
                    <option key={condition.value} value={condition.value}>
                      {condition.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pickup Address */}
              <div>
                <label htmlFor="pickupAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Address *
                </label>
                <textarea
                  id="pickupAddress"
                  name="pickupAddress"
                  required
                  rows={3}
                  value={formData.pickupAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your full address including city, state, and zip code"
                />
              </div>

              {/* Device Photo Upload */}
              <div>
                <label htmlFor="devicePhoto" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Device Photo (Optional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="devicePhoto"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-600"
                      >
                        <span>Upload a file</span>
                        <input
                          id="devicePhoto"
                          name="devicePhoto"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    {formData.devicePhoto && (
                      <p className="text-sm text-primary font-medium">
                        Selected: {formData.devicePhoto.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Any additional details about the device, accessories included, or special pickup instructions"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Donation'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What Happens to Your Device?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="opacity-90">We securely wipe all data from your device to protect your privacy.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="opacity-90">Our technicians refurbish and test the device to ensure it works perfectly.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="opacity-90">We donate it to a family, student, or senior citizen who needs it most.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <p className="opacity-90">You receive a tax-deductible donation receipt for your contribution.</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Questions?</h3>
                <p className="opacity-90 mb-6">
                  Need help with your donation or have questions about our process?
                </p>
                <div className="space-y-2">
                  <p>Email: donations@techequitas.org</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}