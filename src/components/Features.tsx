import { Zap, Shield, MessageSquare, Star } from 'lucide-react';

const features = [
  {
    name: 'TechY-Powered Matching',
    description: 'Find the perfect match for your needs with our advanced TechY algorithms',
    icon: Zap,
  },
  {
    name: 'Secure Transactions',
    description: 'Safe and secure payment processing',
    icon: Shield,
  },
  {
    name: 'Real-Time Communication',
    description: 'Instant messaging and video calls for seamless collaboration',
    icon: MessageSquare,
  },
  {
    name: 'Ratings & Reviews',
    description: 'Establish credibility with authenticated ratings and reviews',
    icon: Star,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Powerful Features for Seamless Service Exchange
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Everything you need to connect, collaborate, and succeed
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative bg-dark-800/50 p-6 rounded-xl border border-dark-700 hover:border-primary-500 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-500 text-white flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}