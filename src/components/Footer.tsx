import { Facebook, Twitter, Linkedin, Instagram, Cable } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Cable color='white' />
              <span className="ml-2 text-xl font-bold text-white">TechY.net</span>
            </div>
            <p className="mt-4 text-gray-400">
              Connecting service providers with clients seamlessly through efficient matching.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#about" className="text-gray-300 hover:text-primary-400">About</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-primary-400">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-primary-400">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-700">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} TechY.net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}