import React from 'react'


import { FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-10">
          Feel free to reach out via any of the following contact methods.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Message */}
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <FaCommentDots className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Message</h3>
            <p className="text-gray-500">Reach out directly to chat with us.</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <FaEnvelope className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-500">info@example.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <FaPhoneAlt className="text-red-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-500">+123 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

  
