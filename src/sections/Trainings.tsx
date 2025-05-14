import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const trainings = [
  {
    title: 'Full Stack Web Development',
    organization: 'Cipher Schools',
    period: 'June 2024 - July 2024',
    description: 'Comprehensive training in full-stack web development covering both frontend and backend technologies.',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'SQL', 'React'],
    projects: ['To-Do List App', 'Single Page Application'],
    image: 'fullstack.jpeg'
  },
  {
    title: 'AWS Academy Cloud Architecting',
    organization: 'AWS Academy',
    period: 'Dec 2023 - Mar 2024',
    description: 'Advanced training in AWS cloud architecture and infrastructure design.',
    skills: ['EC2', 'S3', 'RDS', 'IAM', 'Lambda'],
    tools: ['Terraform', 'CloudFormation'],
    image: 'cloud.jpeg'
  },
];

const TrainingCard = ({ training }: { training: typeof trainings[0] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={training.image} 
          alt={`${training.title} training`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 bg-accent-100 dark:bg-accent-900 rounded-lg">
            <BookOpenIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100">
              {training.title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400">
              {training.organization} • {training.period}
            </p>
          </div>
        </div>
        <p className="text-primary-600 dark:text-primary-300 mb-4">
          {training.description}
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-accent-600 dark:text-accent-400 mb-2">
              Skills Learned
            </h4>
            <div className="flex flex-wrap gap-2">
              {training.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {training.tools && (
            <div>
              <h4 className="text-sm font-semibold text-accent-600 dark:text-accent-400 mb-2">
                Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {training.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
          {training.projects && (
            <div>
              <h4 className="text-sm font-semibold text-accent-600 dark:text-accent-400 mb-2">
                Projects
              </h4>
              <ul className="list-disc list-inside text-primary-600 dark:text-primary-300">
                {training.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Trainings = () => {
  return (
    <section id="trainings" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
            Trainings
          </h2>
          <p className="mt-4 text-primary-600 dark:text-gray-300">
            Professional training and development courses I have completed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainings.map((training) => (
            <TrainingCard key={training.title} training={training} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings; 