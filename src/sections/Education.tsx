import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  logo: string;
};

const education: EducationItem[] = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech CSE',
    period: 'Aug 2022 - Present',
    location: 'Phagwara, Punjab',
    description: 'Currently pursuing Bachelor of Technology in Computer Science and Engineering.',
    logo: 'lpu.png'
  },
  {
    institution: 'Ashoka Academy',
    degree: 'Intermediate (PCM)',
    period: 'Mar 2021 - May 2022',
    location: 'Meerut',
    description: 'Completed Intermediate education with Physics, Chemistry, and Mathematics.',
    logo: 'ashoka.png'
  },
  {
    institution: 'Ashoka Academy',
    degree: 'Matriculation',
    period: 'Mar 2019 - May 2020',
    location: 'Meerut',
    description: 'Completed Matriculation education.',
    logo: 'ashoka.png'
  },
];

const EducationItem = ({ education }: { education: EducationItem }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center">
        <AcademicCapIcon className="w-4 h-4 text-white" />
      </div>
      <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-accent-200 dark:bg-accent-700" />
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={education.logo} 
            alt={`${education.institution} logo`} 
            className="w-16 h-16 object-contain rounded-md"
          />
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-bold text-primary-900 dark:text-gray-100">
                {education.institution}
              </h3>
              <span className="text-accent-600 dark:text-accent-400 font-medium">
                {education.period}
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-primary-700 dark:text-gray-200 font-medium">
                {education.degree}
              </span>
              <span className="hidden md:inline text-primary-400 dark:text-gray-500">•</span>
              <span className="text-primary-600 dark:text-gray-300">
                {education.location}
              </span>
            </div>
          </div>
        </div>
        <p className="text-primary-600 dark:text-gray-300">
          {education.description}
        </p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
            Education
          </h2>
          <p className="mt-4 text-primary-600 dark:text-gray-300">
            My academic journey and qualifications.
          </p>
        </div>
        <div className="relative">
          {education.map((edu) => (
            <EducationItem key={edu.institution + edu.degree} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 