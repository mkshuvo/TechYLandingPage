
const testimonials = [
  {
    content: "TechY.net has transformed how I find and collaborate with clients. The matching is incredibly accurate!",
    author: "Sarah Johnson",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    content: "As a business owner, finding reliable service providers was always a challenge. Not anymore with TechY.net.",
    author: "Michael Chen",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    content: "The platform's security features and payment protection give me peace of mind when working with new clients.",
    author: "Emma Williams",
    role: "Marketing Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <div className="flex-1">
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
              <div className="mt-6 flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}