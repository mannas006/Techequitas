import Image from 'next/image';
import { Target, Eye, Calendar, Users, Award, Heart } from 'lucide-react';
import Card from '@/components/Card';

export default function AboutPage() {
  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'TechEquitas was founded with a simple mission: to ensure everyone has access to technology.',
      icon: Heart,
    },
    {
      year: '2020',
      title: 'First 100 Devices',
      description: 'We reached our first milestone of donating 100 refurbished devices to local families.',
      icon: Award,
    },
    {
      year: '2021',
      title: 'Community Workshops',
      description: 'Launched our first digital literacy workshops for seniors and coding classes for kids.',
      icon: Users,
    },
    {
      year: '2022',
      title: 'Expanding Impact',
      description: 'Partnered with local schools and community centers to reach more people in need.',
      icon: Target,
    },
    {
      year: '2023',
      title: 'Major Milestone',
      description: 'Celebrated donating our 2,000th device and conducting our 100th workshop.',
      icon: Calendar,
    },
    {
      year: '2024',
      title: 'Growing Strong',
      description: 'Expanded to serve three counties and launched our mobile tech support program.',
      icon: Eye,
    },
  ];

  const team = [
    {
      name: 'Sarah Martinez',
      role: 'Founder & Executive Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
      bio: 'Former tech executive passionate about digital equity. Sarah founded TechEquitas after seeing firsthand how technology gaps affect communities.',
    },
    {
      name: 'Michael Chen',
      role: 'Technology Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300',
      bio: 'Computer engineer with 15 years of experience. Michael leads our device refurbishment program and technical training initiatives.',
    },
    {
      name: 'Dr. Angela Roberts',
      role: 'Community Outreach Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300',
      bio: 'Former educator with a PhD in Social Work. Angela builds partnerships with schools, community centers, and social services.',
    },
    {
      name: 'David Kim',
      role: 'Volunteer Coordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300',
      bio: 'Community organizer who manages our amazing network of 200+ volunteers. David ensures every donation reaches the right hands.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About TechEquitas</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a nonprofit—we're a community of people who believe that technology 
              should be accessible to everyone, regardless of their economic circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card padding="lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To bridge the digital divide by collecting, refurbishing, and donating technology devices 
                to individuals and families who lack access to essential digital tools. We believe that 
                everyone deserves the opportunity to participate fully in our digital society.
              </p>
            </Card>

            <Card padding="lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where everyone has equal access to technology and the digital skills needed to 
                thrive in the 21st century. We envision communities where the digital divide no longer 
                exists, and technology serves as a bridge to opportunity rather than a barrier.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From a simple idea to a community movement</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <Card padding="lg">
                        <div className="flex items-center mb-4">
                          <div className="bg-primary-100 p-3 rounded-full mr-4">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-primary font-bold text-xl">{item.year}</div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full my-4 lg:my-0 hidden lg:flex">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="w-full lg:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind TechEquitas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center" padding="lg">
                <div className="mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl opacity-90">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Compassion</h3>
              <p className="opacity-90">We approach every interaction with empathy and understanding, recognizing the challenges people face in accessing technology.</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="opacity-90">We believe in the power of community collaboration and work together to create lasting positive change.</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <p className="opacity-90">Every device donated and every person helped represents real, measurable impact in bridging the digital divide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}