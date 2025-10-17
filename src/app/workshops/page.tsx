'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, Code, Laptop, Smartphone, BookOpen } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function WorkshopsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const workshops = [
    {
      id: 1,
      title: 'Coding for Kids: JavaScript Basics',
      category: 'kids',
      date: '2024-11-15',
      time: '10:00 AM - 12:00 PM',
      location: 'TechEquitas Community Center',
      capacity: 15,
      enrolled: 8,
      instructor: 'Sarah Martinez',
      description: 'Learn the fundamentals of JavaScript programming through fun games and interactive projects.',
      image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250',
      level: 'Beginner',
      ageGroup: '8-14 years',
      icon: Code,
    },
    {
      id: 2,
      title: 'Senior Tech: Video Calling Made Easy',
      category: 'seniors',
      date: '2024-11-18',
      time: '2:00 PM - 4:00 PM',
      location: 'Sunset Senior Center',
      capacity: 12,
      enrolled: 10,
      instructor: 'Michael Chen',
      description: 'Master video calling apps like Zoom, FaceTime, and Skype to stay connected with family.',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250',
      level: 'Beginner',
      ageGroup: '55+ years',
      icon: Smartphone,
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      category: 'kids',
      date: '2024-11-22',
      time: '9:00 AM - 3:00 PM',
      location: 'Central Library Tech Lab',
      capacity: 20,
      enrolled: 15,
      instructor: 'David Kim',
      description: 'Build your first website using HTML, CSS, and JavaScript in this intensive day-long workshop.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250',
      level: 'Intermediate',
      ageGroup: '12-18 years',
      icon: Laptop,
    },
    {
      id: 4,
      title: 'Digital Safety & Privacy',
      category: 'seniors',
      date: '2024-11-25',
      time: '1:00 PM - 3:00 PM',
      location: 'TechEquitas Community Center',
      capacity: 25,
      enrolled: 18,
      instructor: 'Dr. Angela Roberts',
      description: 'Learn how to protect yourself online, recognize scams, and keep your personal information safe.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
      level: 'Beginner',
      ageGroup: 'All ages',
      icon: BookOpen,
    },
    {
      id: 5,
      title: 'Python for Young Programmers',
      category: 'kids',
      date: '2024-12-01',
      time: '10:00 AM - 12:00 PM',
      location: 'TechEquitas Community Center',
      capacity: 18,
      enrolled: 12,
      instructor: 'Sarah Martinez',
      description: 'Introduction to Python programming through creative projects and problem-solving challenges.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250',
      level: 'Beginner',
      ageGroup: '10-16 years',
      icon: Code,
    },
    {
      id: 6,
      title: 'Smartphone Photography Tips',
      category: 'seniors',
      date: '2024-12-05',
      time: '2:00 PM - 4:00 PM',
      location: 'Riverside Community Center',
      capacity: 15,
      enrolled: 7,
      instructor: 'Michael Chen',
      description: 'Learn to take amazing photos with your smartphone and share them with friends and family.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250',
      level: 'Beginner',
      ageGroup: '50+ years',
      icon: Smartphone,
    },
  ];

  const categories = [
    { value: 'all', label: 'All Workshops', icon: BookOpen },
    { value: 'kids', label: 'Coding for Kids', icon: Code },
    { value: 'seniors', label: 'Tech for Seniors', icon: Laptop },
  ];

  const filteredWorkshops = selectedCategory === 'all' 
    ? workshops 
    : workshops.filter(workshop => workshop.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Tech Workshops</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free workshops designed to build digital skills and confidence. From coding classes for kids 
            to technology training for seniors, we offer something for everyone in our community.
          </p>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.value}
                  className={`text-center cursor-pointer transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'ring-2 ring-primary bg-primary-50'
                      : 'hover:shadow-lg'
                  }`}
                  padding="lg"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  <Icon className={`h-12 w-12 mx-auto mb-4 ${
                    selectedCategory === category.value ? 'text-primary' : 'text-gray-400'
                  }`} />
                  <h3 className={`text-xl font-semibold mb-2 ${
                    selectedCategory === category.value ? 'text-primary' : 'text-gray-900'
                  }`}>
                    {category.label}
                  </h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Programs Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Coding Workshops for Kids</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our youth coding programs introduce children and teenagers to the exciting world of programming 
                  through hands-on, project-based learning. Students learn valuable problem-solving skills while 
                  having fun creating games, websites, and apps.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span>JavaScript, Python, HTML/CSS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Small class sizes (15-20 students)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Project-based learning approach</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tech Training for Seniors</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our senior-focused workshops help older adults feel confident using modern technology. 
                  We cover everything from basic computer skills to staying safe online, all taught at a 
                  comfortable pace with patient, experienced instructors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <span>Smartphone & tablet basics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Laptop className="h-5 w-5 text-primary" />
                    <span>Video calling & social media</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Digital safety & privacy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Workshops</h2>
            <p className="text-xl text-gray-600">Register now to secure your spot</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop) => {
              const Icon = workshop.icon;
              const spotsLeft = workshop.capacity - workshop.enrolled;
              
              return (
                <Card key={workshop.id} className="overflow-hidden" padding="sm">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={workshop.image}
                      alt={workshop.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                      {workshop.level}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {workshop.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4 text-gray-600">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{formatDate(workshop.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{workshop.ageGroup}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {workshop.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">
                        <span className="font-semibold text-gray-900">Instructor:</span>
                        <span className="text-gray-600 ml-1">{workshop.instructor}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className={`font-semibold ${spotsLeft <= 3 ? 'text-red-600' : 'text-green-600'}`}>
                          {spotsLeft} spots left
                        </span>
                        <span className="text-gray-500 ml-1">
                          ({workshop.enrolled}/{workshop.capacity})
                        </span>
                      </div>
                      <Button
                        size="sm"
                        disabled={spotsLeft === 0}
                        className={spotsLeft === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                      >
                        {spotsLeft === 0 ? 'Full' : 'Register'}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See What You're Looking For?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We're always developing new workshops based on community needs. 
            Let us know what technology skills you'd like to learn!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Suggest a Workshop
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Volunteer to Teach
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}