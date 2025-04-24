import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-accent-200 shadow-lg animate-float">
              <img
                src="/profile.jpg"
                alt="Ankur Kumar Kasana"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-800 mb-4">
              Ankur Kumar Kasana
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 mb-8">
              Cloud Enthusiast | Android App Developer | Problem Solver
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
          >
            <a
              href="mailto:ankurkasanaa777@gmail.com"
              className="flex items-center gap-2 text-primary-600 hover:text-accent-600 transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>ankurkasanaa777@gmail.com</span>
            </a>
            <a
              href="tel:+918077661752"
              className="flex items-center gap-2 text-primary-600 hover:text-accent-600 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>+91 8077661752</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/ankurgurjar/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent-50 text-accent-600 rounded-lg hover:bg-accent-100 transition-colors shadow-sm hover:shadow-md"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AnkurKumarKasana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent-50 text-accent-600 rounded-lg hover:bg-accent-100 transition-colors shadow-sm hover:shadow-md"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1h36XtsAjwS8XyytXOan4ZI8uUOs1SSwv/view?usp=sharing"
              className="px-6 py-3 bg-accent-50 text-accent-600 rounded-lg hover:bg-accent-100 transition-colors shadow-sm hover:shadow-md"
            >
              View Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce-slow">
              <ArrowDownIcon className="h-6 w-6 text-primary-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 