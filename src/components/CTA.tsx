import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark-900/50 to-secondary-900/30" />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join TechY.net today and experience the future of service marketplaces.
          </p>
          <button className="mt-8 bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition inline-flex items-center gap-2 shadow-lg shadow-primary-500/20">
            Join Now
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}