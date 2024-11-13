import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-dark-900 pt-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Professional collaboration"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 to-primary-900/90 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connecting Service Providers with Clients Seamlessly
          </h1>
          <p className="mt-6 text-xl text-gray-100">
            Your Ultimate Marketplace for Professional Services
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="text-white font-semibold hover:text-primary-200 transition">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}