import React from 'react';
import { Mail, Github, Linkedin, Heart, Send, Coffee } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto font-serif">
            Got a project, an idea, or a challenge? Let’s talk.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6" />
        </div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-playfair font-semibold mb-4 flex items-center space-x-2 text-white">
                <span>Direct Contact</span>
              </h3>
              <div className="space-y-3 text-blue-200 text-sm">
                <p><strong>Email:</strong> prachiyadav2409@gmail.com</p>
                <p><strong>Response Time:</strong> Usually within 24 hours</p>
                <p><strong>Best For:</strong> Project discussions, collabs, tech help, or just vibing</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-white">
                Find Me Online
              </h3>
              <div className="space-y-4 text-blue-200 text-sm">
                <a 
                  href="https://github.com/pprachhiii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>GitHub – My code vault</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/prachi-yadav-87303231a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn – Professional zone</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              Quick Message
            </h3>
            
          <form
            action="https://formspree.io/f/movepkgr"
            method="POST"
            className="space-y-4"
          >
            <div>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            
            <div>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            
            <div>
              <textarea 
                name="message"
                rows={4}
                placeholder="Tell me about your project or just say hi!"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Send
            </button>
          </form>
          
          </div>
          
        </div>
        <div className="mt-16 text-center text-sm text-blue-300 flex justify-center items-center gap-2">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-400 animate-pulse" />
          <span>and</span>
          <Coffee className="w-4 h-4 text-yellow-300" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
