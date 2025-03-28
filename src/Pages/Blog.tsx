import { Search } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Tips for Comfortable Airport Transfers",
      excerpt:
        "Make your airport transfer experience smoother with these essential tips. From booking in advance to choosing the right service level...",
      image: "/api/placeholder/800/400",
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Business Travel: Making the Most of Airport Transfers",
      excerpt:
        "Maximize your productivity during business travel with our professional airport transfer services. Learn how to optimize your travel time...",
      image: "/api/placeholder/800/400",
      date: "March 10, 2024",
    },
  ];

  const recentPosts = [
    "How to Choose the Right Airport Transfer Service",
    "Airport Transfer Etiquette: A Complete Guide",
    "Making Your Late-Night Airport Transfer Safe",
    "Family Travel: Group Airport Transfer Tips",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold pt-16 text-center">
            Our Blog
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="mb-12 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{post.date}</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Search Posts
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {recentPosts.map((title, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-100 pb-2 last:border-0"
                  >
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
