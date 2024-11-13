import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Alex Rivera',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:alex@TechY.net'
    }
  },
  {
    name: 'Lisa Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:lisa@TechY.net'
    }
  },
  {
    name: 'David Kim',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:david@TechY.net'
    }
  }
];

export default function About() {
  return (
    <div id="about" className="bg-dark-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Our mission is to revolutionize the way services are exchanged, making it easier and more efficient for everyone involved.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-white mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div 
                key={member.name} 
                className="group relative"
                role="article"
                aria-label={`Team member ${member.name}`}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                  />
                  {/* Overlay with social icons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex justify-center space-x-4">
                        <a 
                          href={member.social.linkedin}
                          className="p-2 text-white hover:text-primary-400 transition-colors"
                          aria-label={`${member.name}'s LinkedIn profile`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                        <a 
                          href={member.social.twitter}
                          className="p-2 text-white hover:text-primary-400 transition-colors"
                          aria-label={`${member.name}'s Twitter profile`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="w-6 h-6" />
                        </a>
                        <a 
                          href={member.social.email}
                          className="p-2 text-white hover:text-primary-400 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-gray-400 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 bg-dark-800/50 rounded-2xl p-8 border border-dark-700">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              At TechY.net, we envision a future where finding and connecting with the right service provider is seamless and efficient. Our platform brings together professionals and clients in a secure, transparent environment, fostering successful collaborations and driving business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}