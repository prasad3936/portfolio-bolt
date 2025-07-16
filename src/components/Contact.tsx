import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Method 1: mailto (fallback)
      const mailtoLink = `mailto:prasadcpatil246@gmail.com?subject=${encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      // Method 2: Formspree (recommended for production)
      // You can sign up at https://formspree.io/ and replace 'YOUR_FORM_ID' with your actual form ID
      const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
      
      // Try to submit via Formspree first
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });
        
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Formspree submission failed');
        }
      } catch (formspreeError) {
        // Fallback to mailto
        window.location.href = mailtoLink;
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDirectContact = (method: 'email' | 'phone' | 'whatsapp') => {
    if (method === 'email') {
      window.location.href = 'mailto:prasadcpatil246@gmail.com';
    } else if (method === 'phone') {
      window.location.href = 'tel:+919637370116';
    } else if (method === 'whatsapp') {
      // WhatsApp Web/App link with pre-filled message
      const whatsappMessage = encodeURIComponent('Hi Prasad! I found your portfolio and would like to connect with you regarding DevOps opportunities.');
      window.open(`https://wa.me/919637370116?text=${whatsappMessage}`, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div 
                  className="flex items-center cursor-pointer group"
                  onClick={() => handleDirectContact('email')}
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white hover:text-blue-400 transition-colors">
                      prasadcpatil246@gmail.com
                    </p>
                  </div>
                </div>
                
                <div 
                  className="flex items-center cursor-pointer group"
                  onClick={() => handleDirectContact('phone')}
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white hover:text-blue-400 transition-colors">9637370116 / 9637354092</p>
                  </div>
                </div>

                <div 
                  className="flex items-center cursor-pointer group"
                  onClick={() => handleDirectContact('whatsapp')}
                >
                  <div className="p-3 bg-green-500/10 rounded-lg mr-4 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white hover:text-green-400 transition-colors">+91 9637370116</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                    <MapPin size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Pune, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/prasad3936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
                  >
                    <Github size={20} className="text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/prasad-zungare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
                  >
                    <Linkedin size={20} className="text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href="https://medium.com/@prasadcpatil246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
                  >
                    <ExternalLink size={20} className="text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-8 p-4 bg-zinc-800 rounded-lg border border-zinc-700">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Quick Contact</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleDirectContact('whatsapp')}
                    className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-green-400 hover:bg-zinc-700 rounded transition-colors flex items-center"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Message on WhatsApp
                  </button>
                  <button
                    onClick={() => handleDirectContact('email')}
                    className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-zinc-700 rounded transition-colors flex items-center"
                  >
                    <Mail size={16} className="mr-2" />
                    Send Email Directly
                  </button>
                  <button
                    onClick={() => handleDirectContact('phone')}
                    className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-zinc-700 rounded transition-colors flex items-center"
                  >
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Send Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center">
                  <CheckCircle size={20} className="text-green-400 mr-3" />
                  <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center">
                  <AlertCircle size={20} className="text-red-400 mr-3" />
                  <span className="text-red-400">Failed to send message. Please try the direct contact options.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Subject (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="text-gray-400 text-sm text-center mb-3">
                  Prefer instant messaging?
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleDirectContact('whatsapp')}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleDirectContact('email')}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <Mail size={16} className="mr-2" />
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;