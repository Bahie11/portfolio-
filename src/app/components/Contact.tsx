import { Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key from environment variables
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
        // Use EmailJS
        const templateParams = {
          to_email: 'mahmoudelbahie4@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams
        );
        setStatusMessage('✓ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else if (FORMSPREE_ENDPOINT) {
        // Use Formspree
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setStatusMessage('✓ Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatusMessage('✗ Failed to send message. Please try again.');
        }
      } else {
        setStatusMessage('✗ Email service not configured. Please contact the administrator.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('✗ Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0d1117 0%, #0a0a0f 100%)' }}>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-bold text-white">
          Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-cyan-400/60 mb-12 tracking-widest text-sm uppercase">Let's Connect</p>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-400">
                Have a project or collaboration in mind? Let's talk.
              </p>
            </div>

            {statusMessage && (
              <div className={`mb-6 p-4 rounded-lg text-center font-medium ${
                statusMessage.includes('✓') 
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}>
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 text-sm font-medium tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm font-medium tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm font-medium tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
