import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../Components/Button";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone Support",
      description: "24/7 Available",
      detail: "+1 (555) 123-4567",
    },
    {
      id: 2,
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      description: "Get in touch via email",
      detail: "support@airporttransfer.com",
    },
    {
      id: 3,
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Office Location",
      description: "Visit our office",
      detail: "123 Airport Road, City, State 12345",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold pt-16 text-center">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch with Us
          </h2>
          <p className="text-gray-600">
            Have questions about our airport transfer services? We're here to
            help! Reach out to us through any of the following channels, and our
            team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info) => (
            <div
              key={info.id}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">{info.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                {info.description}
              </p>
              <p className="text-gray-600">{info.detail}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                />
              </div>
              <div className="text-center">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
