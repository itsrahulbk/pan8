import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "innayanutrifoods@gmail.com",
    link: "mailto:innayanutrifoods@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    content: "+91 77367 41364",
    link: "tel:+917736741364"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    content: "F223, DLF NTH, Kakkanad, Kochi - 682037",
    link: "https://maps.google.com/?q=F223,+DLF+NTH,+Kakkanad,+Kochi"
  }
];

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our team</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition group"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h2>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for updates and news.
              </p>
              <div className="flex space-x-4">
                <a href="www.instagram.com/pan8.nutri" className="hover:text-emerald-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="www.linkedin/innayanutrifoods" className="hover:text-emerald-500">
                <Linkedin className="w-6 h-6" />
              </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}