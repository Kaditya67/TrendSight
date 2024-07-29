// src/components/Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold text-white mb-6">
          Contact Us
        </h2>
        <div className="flex flex-wrap mt-6 justify-between">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <ul className="list-unstyled text-gray-400 space-y-3">
              <li>
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:stockbased9@gmail.com" className="text-gray-400 hover:text-white transition duration-300">
                  stockbased9@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-white">Phone:</strong> +1 (123) 456-7890
              </li>
              <li>
                <strong className="text-white">Address:</strong> 123 Main Street, City, Country
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1 block w-full border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm placeholder-gray-500
                    p-2"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control p-2 mt-1 block w-full border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm placeholder-gray-500"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control p-2 mt-1 block w-full border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm placeholder-gray-500"
                    id="message"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold py-2 px-4 shadow-lg hover:from-gray-600 hover:to-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
