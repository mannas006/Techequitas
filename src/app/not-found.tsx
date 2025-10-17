'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full sm:w-auto">
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center">
            <button 
              onClick={() => window.history.back()}
              className="text-primary hover:text-primary-800 font-medium inline-flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Go Back
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? <Link href="/contact" className="text-primary hover:text-primary-800">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}