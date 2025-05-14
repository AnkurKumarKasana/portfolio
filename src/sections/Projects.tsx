import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Restaurant Website',
    description: 'A modern restaurant website with responsive design, online booking, and menu management. Built with React.js and modern web technologies for an optimal user experience.',
    stack: ['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: '/rest.png',
    github: 'https://github.com/your-profile/restaurant-website',
    demo: 'https://restaurant-website-demo.com',
    features: [
      'Responsive design for all devices',
      'Online table booking system',
      'Dynamic menu management',
      'User authentication',
      'Admin dashboard'
    ]
  },
  {
    title: 'Multi-Tier Web App on AWS',
    description: 'A scalable web application deployed on AWS using infrastructure as code and microservices architecture. Implements best practices for cloud-native applications.',
    stack: ['AWS EC2', 'RDS', 'S3', 'Terraform', 'Docker', 'Kubernetes'],
    image: '/aws.png',
    github: 'https://github.com/your-profile/aws-web-app',
    demo: 'https://aws-web-app-demo.com',
    features: [
      'Microservices architecture',
      'Auto-scaling configuration',
      'Load balancing',
      'Containerized deployment',
      'CI/CD pipeline'
    ]
  },
  {
    title: 'EduSmart App',
    description: 'An educational mobile application that helps students manage their studies, track progress, and access learning resources. Developed for Android using Kotlin and Android Studio.',
    stack: ['Kotlin', 'Android Studio', 'Firebase', 'Room Database', 'Material Design'],
    image: "eLearning-App.jpg",
    github: 'https://github.com/AnkurKumarKasana/Smart-Edu',
    demo: 'https://play.google.com/store/apps/details?id=com.yourdomain.edusmart',
    features: [
      'Study planner and scheduler',
      'Progress tracking and analytics',
      'Learning resource management',
      'Offline access to materials',
      'Push notifications for reminders'
    ]
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
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
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-700 rounded-full hover:bg-primary-50 dark:hover:bg-gray-600 transition-colors"
          >
            <CodeBracketIcon className="w-6 h-6 text-primary-600 dark:text-accent-400" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-700 rounded-full hover:bg-primary-50 dark:hover:bg-gray-600 transition-colors"
          >
            <ArrowTopRightOnSquareIcon className="w-6 h-6 text-primary-600 dark:text-accent-400" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-primary-800 dark:text-gray-100 mb-3">
          {project.title}
        </h3>
        <p className="text-primary-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary-700 dark:text-gray-200 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-primary-600 dark:text-gray-300 space-y-1">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
            Projects
          </h2>
          <p className="mt-4 text-primary-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 