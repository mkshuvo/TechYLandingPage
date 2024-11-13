import { UserPlus, Search, Users } from 'lucide-react';

const steps = [
  {
    title: 'Sign Up',
    description: 'Easy registration for both service providers and clients',
    icon: UserPlus,
  },
  {
    title: 'Browse Services',
    description: 'Explore a wide range of professional services',
    icon: Search,
  },
  {
    title: 'Connect & Collaborate',
    description: 'Seamlessly connect and start working together',
    icon: Users,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-dark-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Get started in three simple steps
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full">
                    <div className="h-0.5 bg-primary-500/30 relative">
                      <div className="absolute right-0 -mt-1 h-3 w-3 rounded-full bg-primary-500" />
                    </div>
                  </div>
                )}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-center text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}