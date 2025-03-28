import { User } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO & Founder",
      description:
        "With over 15 years of experience in transportation services, John leads our company vision and growth strategy.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Operations Manager",
      description:
        "Sarah ensures smooth daily operations and maintains our high service standards across all transfers.",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Customer Relations",
      description:
        "Michael heads our customer service team, ensuring every client receives exceptional support and assistance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold pt-16 text-center">
            About Us
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Your Trusted Airport Transfer Partner
          </h2>
          <p className="text-gray-600 mb-4">
            Since 2010, we've been providing reliable and comfortable airport
            transfer services to travelers worldwide. Our commitment to
            punctuality, professionalism, and customer satisfaction has made us
            a leading name in the transportation industry.
          </p>
          <p className="text-gray-600">
            With a fleet of modern vehicles and experienced drivers, we ensure
            every journey is safe, comfortable, and stress-free. Whether you're
            traveling for business or leisure, we're here to make your airport
            transfer experience exceptional.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <User className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Professional Drivers</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
