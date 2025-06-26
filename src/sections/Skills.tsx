import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = {
  frontend: {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "React Js", icon: "⚛️" },
      { name: "Redux", icon: "🔄" },
      { name: "Next Js", icon: "▲" },
      { name: "Cloudinary", icon: "☁️" },
    ]
  },
  backend: {
    title: "Backend",
    skills: [
      { name: "Node Js", icon: "🟢" },
      { name: "Express Js", icon: "⚡" },
      { name: "MySQL", icon: "🗄️" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
    ]
  },
  programming: {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: "©️" },
      { name: "C++", icon: "➕" },
      { name: "Kotlin", icon: "🔒" },
      { name: "JavaScript", icon: "📜" },
      { name: "XML", icon: "📜" },
    ]
  }
};

const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
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
      className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-primary-700 dark:text-gray-300">{name}</span>
    </motion.div>
  );
};

const SkillSection = ({ title, skills }: { title: string; skills: { name: string; icon: string }[] }) => {
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
      className="bg-primary-50/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
    >
      <h3 className="text-2xl font-semibold text-primary-800 dark:text-gray-100 mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 dark:text-gray-100">Skills</h2>
          <p className="mt-4 text-primary-600 dark:text-gray-300">
            Here are some of my skills on which I have been working on for the past 3 years.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillSection title={skillsData.frontend.title} skills={skillsData.frontend.skills} />
          <SkillSection title={skillsData.backend.title} skills={skillsData.backend.skills} />
          <SkillSection title={skillsData.programming.title} skills={skillsData.programming.skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills; 