import { useState } from 'react';
import { Cable, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-900/95 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <Type className="h-8 w-8 text-primary-400" /> */}
            <Cable color='white' />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary-400">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-primary-400">How It Works</a>
            <a href="#about" className="text-gray-300 hover:text-primary-400">About</a>
            <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-300 hover:text-primary-400">How It Works</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-primary-400">About</a>
            <button className="w-full text-left px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}