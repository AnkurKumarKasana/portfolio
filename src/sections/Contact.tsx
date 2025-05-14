import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formBoxRef, formBoxInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS service configuration
    const serviceId = 'service_4zaffbb';
    const templateId = 'template_62hcgnk';
    const publicKey = 'T1bfxRKx_NOOqqyz6';
    
    // Add recipient email to the template parameters
    const templateParams = {
      ...formData,
      to_email: 'officialgujar@gmail.com',
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus({ 
          success: true, 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        // Reset form
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitStatus({ 
          success: false, 
          message: 'Failed to send message. Please try again later.' 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 dark:text-gray-100 mb-4">
            Contact Me
          </h2>
          <p className="mt-4 text-primary-600 dark:text-gray-300">
            Feel free to reach out to me for any questions or opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, x: -20 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#1a2235] rounded-xl p-8 shadow-md"
          >
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-primary-50 dark:bg-[#0f4c81] rounded-xl p-3 mr-6">
                  <EnvelopeIcon className="w-8 h-8 text-accent-600 dark:text-[#3498db]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white">Email</h3>
                  <a
                    href="mailto:ankurkasanaa777@gmail.com"
                    className="text-primary-600 dark:text-gray-300 hover:text-accent-600 dark:hover:text-[#3498db] transition-colors"
                  >
                    ankurkasanaa777@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary-50 dark:bg-[#0f4c81] rounded-xl p-3 mr-6">
                  <PhoneIcon className="w-8 h-8 text-accent-600 dark:text-[#3498db]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white">Phone</h3>
                  <a
                    href="tel:+918077661752"
                    className="text-primary-600 dark:text-gray-300 hover:text-accent-600 dark:hover:text-[#3498db] transition-colors"
                  >
                    +91 8077661752
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary-50 dark:bg-[#0f4c81] rounded-xl p-3 mr-6">
                  <MapPinIcon className="w-8 h-8 text-accent-600 dark:text-[#3498db]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white">Location</h3>
                  <p className="text-primary-600 dark:text-gray-300">Phagwara, Punjab, India</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/ankurgurjar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-accent-600 hover:bg-accent-700 dark:bg-[#0077b5] dark:hover:bg-[#00669c] text-white rounded-md transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/AnkurKumarKasana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary-700 hover:bg-primary-800 dark:bg-[#333] dark:hover:bg-[#222] text-white rounded-md transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={formBoxRef}
            initial={{ opacity: 0, x: 20 }}
            animate={formBoxInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
          >
            {submitStatus.message && (
              <div className={`mb-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-primary-800 dark:text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-primary-300 dark:border-gray-700 shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-primary-800 dark:text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-primary-300 dark:border-gray-700 shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-800 dark:text-gray-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-primary-300 dark:border-gray-700 shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-2 ${isSubmitting ? 'bg-gray-400' : 'bg-accent-600 hover:bg-accent-700'} text-white rounded-md transition-colors`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 