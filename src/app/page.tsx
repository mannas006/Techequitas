'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Smartphone, Users, BookOpen, ChevronLeft, ChevronRight, Heart, Laptop, Monitor, Quote, Play, Pause, Target, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/Button';
import Card from '@/components/Card';
import AnimatedCounter from '@/components/AnimatedCounter';
import FadeInView from '@/components/FadeInView';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stats = [
    { label: 'Devices Donated', value: 2847, icon: Smartphone },
    { label: 'People Helped', value: 5632, icon: Users },
    { label: 'Workshops Conducted', value: 156, icon: BookOpen },
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Single Mother',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
      text: 'Thanks to TechEquitas, my daughter can now attend online classes. This laptop changed our lives completely.'
    },
    {
      name: 'James Chen',
      role: 'Senior Citizen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
      text: 'The tech workshop helped me stay connected with my grandchildren. I can now video call them every week!'
    },
    {
      name: 'Sarah Johnson',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
      text: 'Getting a refurbished tablet helped me complete a nursing degree. Forever grateful to this amazing organization.'
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testimonials.length, isPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setImageLoading(true);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setImageLoading(true);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Debug element to test CSS loading */}
      <div className="debug-css-loaded fixed top-0 right-0 z-50 text-xs">CSS Debug</div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight px-3 sm:px-0">
                Bridging the{' '}
                <span className="text-primary block xs:inline">Digital Divide</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 px-3 sm:px-0">
                We collect old technology and give it new life by donating it to those who need it most. 
                Every device has the power to transform lives and create opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-3 sm:px-0 max-w-md mx-auto lg:max-w-none">
                <Link href="/donate" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto min-h-[50px] text-base sm:text-lg font-semibold group flex items-center justify-center">
                    <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                    Donate Devices
                  </Button>
                </Link>
                <Link href="/workshops" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto min-h-[50px] text-base sm:text-lg font-semibold group flex items-center justify-center">
                    <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                    Join a Workshop
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0 px-3 sm:px-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xs xs:max-w-sm mx-auto lg:max-w-none">
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-lg text-center">
                    <Laptop className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mb-2 sm:mb-3 lg:mb-4 mx-auto" />
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Laptops</h3>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-lg text-center">
                    <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mb-2 sm:mb-3 lg:mb-4 mx-auto" />
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Phones</h3>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 lg:mt-8">
                  <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-lg text-center">
                    <Monitor className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mb-2 sm:mb-3 lg:mb-4 mx-auto" />
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Monitors</h3>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-lg text-center">
                    <Heart className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mb-2 sm:mb-3 lg:mb-4 mx-auto" />
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Hope</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">Our Impact</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 sm:px-0">Making a difference, one device at a time</p>
          </FadeInView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <FadeInView key={index} delay={index * 0.2}>
                  <Card className="text-center" padding="lg">
                    <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      <AnimatedCounter 
                        value={stat.value} 
                        duration={2.5}
                        delay={index * 0.3}
                      />
                    </div>
                    <div className="text-base sm:text-lg text-gray-600">{stat.label}</div>
                  </Card>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern - Hidden on mobile for better performance */}
        <div className="absolute inset-0 opacity-5 hidden lg:block">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-secondary rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-primary rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-secondary rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <FadeInView className="space-y-8 sm:space-y-10">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6">
                  <Target className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4 sm:px-0">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
                  Bridging the digital divide, one refurbished device at a time
                </p>
              </div>

              {/* Mission Points */}
              <div className="space-y-5 sm:space-y-6 px-4 sm:px-0">
                <FadeInView delay={0.2}>
                  <motion.div 
                    className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto sm:mx-0">
                      <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Technology as a Necessity</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Access to technology isn't a luxury—it's essential for education, employment, and connecting to vital services in our digital world.
                      </p>
                    </div>
                  </motion.div>
                </FadeInView>

                <FadeInView delay={0.4}>
                  <motion.div 
                    className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto sm:mx-0">
                      <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Bridging the Gap</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        We collect donated devices from individuals and businesses, refurbish them to like-new condition, and distribute them to those who need them most.
                      </p>
                    </div>
                  </motion.div>
                </FadeInView>

                <FadeInView delay={0.6}>
                  <motion.div 
                    className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                      <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Opening Opportunities</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Every refurbished device opens doors to online learning, job applications, telehealth services, and staying connected with loved ones.
                      </p>
                    </div>
                  </motion.div>
                </FadeInView>
              </div>

              {/* Impact Metrics */}
              <FadeInView delay={0.8}>
                <div className="grid grid-cols-3 gap-6 p-6 bg-primary/5 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">99%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Impact Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </FadeInView>

              {/* Enhanced CTA */}
              <FadeInView delay={1.0}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start px-4 sm:px-0">
                  <Link href="/about" className="flex-1 sm:flex-none">
                    <Button size="lg" className="w-full sm:w-auto group min-h-[52px] text-base font-semibold flex items-center justify-center">
                      Learn More About Us
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                  <Link href="/donate" className="flex-1 sm:flex-none">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto group min-h-[52px] text-base font-semibold flex items-center justify-center">
                      <Heart className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                      Start Donating
                    </Button>
                  </Link>
                </div>
              </FadeInView>
            </FadeInView>

            {/* Visual Side */}
            <FadeInView delay={0.3} className="relative">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative z-10"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
                    alt="People learning technology together"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Device Refurbished</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-6 -left-6 bg-primary p-4 rounded-xl shadow-lg z-20"
                >
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-white" />
                    <span className="text-sm font-medium text-white">Lives Changed</span>
                  </div>
                </motion.div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl scale-110 -z-10"></div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stories of Impact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6">
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Stories of Impact
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from real people whose lives have been transformed through technology access
            </p>
          </FadeInView>
          
          <div className="relative max-w-5xl mx-auto">
            <div 
              className="relative"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Card className="p-6 sm:p-8 lg:p-12 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-10">
                      <div className="flex-shrink-0 relative">
                        <div className="relative">
                          {imageLoading && (
                            <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
                          )}
                          <Image
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                            width={160}
                            height={160}
                            className={`w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full shadow-lg transition-opacity duration-300 ${
                              imageLoading ? 'opacity-0' : 'opacity-100'
                            }`}
                            onLoad={handleImageLoad}
                          />
                        </div>
                        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                          <Quote className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center lg:text-left">
                        <motion.blockquote 
                          className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 font-medium leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          "{testimonials[currentTestimonial].text}"
                        </motion.blockquote>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <div className="font-bold text-xl text-gray-900 mb-1">
                            {testimonials[currentTestimonial].name}
                          </div>
                          <div className="text-primary font-medium text-lg">
                            {testimonials[currentTestimonial].role}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Enhanced Navigation */}
            <div className="flex items-center justify-between mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="group bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 sm:p-4 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 touch-manipulation"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:text-primary transition-colors" />
              </button>
              
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Progress Indicators */}
                <div className="flex space-x-2 sm:space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentTestimonial(index);
                        setImageLoading(true);
                      }}
                      className={`relative w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                        index === currentTestimonial 
                          ? 'bg-primary scale-125 shadow-lg' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    >
                      {index === currentTestimonial && (
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Play/Pause Button */}
                <button
                  onClick={toggleAutoPlay}
                  className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 sm:p-3 hover:bg-white hover:shadow-xl transition-all duration-300 touch-manipulation"
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                  ) : (
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                  )}
                </button>
              </div>
              
              <button
                onClick={nextTestimonial}
                className="group bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 sm:p-4 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 touch-manipulation"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our mission to bridge the digital divide. Whether you have devices to donate or want to volunteer, 
            every contribution makes a meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Donate a Device
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}