import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Reset form and show success message
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="portfolio-section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="portfolio-heading">Contact</h1>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            Ready to start your next project? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="portfolio-card p-8">
              <h2 className="text-2xl font-bold text-portfolio-text mb-6">Contact Info</h2>
              <p className="text-portfolio-text-muted mb-6 leading-relaxed">
                Passionate designer focused on fulfilling your requirements, 
                providing top-quality service to launch your projects.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-portfolio-accent bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-text mb-1">Our Location</h3>
                    <p className="text-portfolio-text-muted">
                      123 Business Ave<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-portfolio-accent bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-text mb-1">Phone Number</h3>
                    <p className="text-portfolio-text-muted">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-portfolio-accent bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-text mb-1">Email Address</h3>
                    <p className="text-portfolio-text-muted">
                      hello@alexchen.dev<br />
                      contact@alexportfolio.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="portfolio-card p-8">
              <h3 className="text-lg font-semibold text-portfolio-text mb-4">
                Why Choose Me?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-portfolio-text">Professional Experience</h4>
                    <p className="text-portfolio-text-muted text-sm">
                      8+ years of experience in delivering high-quality digital solutions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-portfolio-text">Quick Response</h4>
                    <p className="text-portfolio-text-muted text-sm">
                      I typically respond within 24 hours to all inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="portfolio-card p-8">
            <h2 className="text-2xl font-bold text-portfolio-text mb-6">Get In Touch</h2>
            <p className="text-portfolio-text-muted mb-6">
              Passionate designer focused on fulfilling your requirements, 
              providing top-quality services to launch your projects.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-portfolio-border border border-portfolio-border rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-portfolio-border border border-portfolio-border rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-portfolio-border border border-portfolio-border rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-portfolio-border border border-portfolio-border rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-portfolio-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500 bg-opacity-10 border border-green-500 rounded-lg">
                  <p className="text-green-400 text-sm">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500 bg-opacity-10 border border-red-500 rounded-lg">
                  <p className="text-red-400 text-sm">
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-portfolio-border">
          <p className="text-portfolio-text-muted text-sm">
            © Copyright Portfolio. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
