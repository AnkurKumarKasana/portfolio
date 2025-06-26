import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Certification {
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl: string;
}

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
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
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-4">
        <img 
          src={certification.imageUrl} 
          alt={`${certification.title} certificate`} 
          className="w-full h-48 object-contain mb-4 rounded-lg"
        />
      </div>
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2 bg-accent-100 dark:bg-accent-900 rounded-lg">
          <AcademicCapIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100">
            {certification.title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400">
            {certification.organization} • {certification.date}
          </p>
        </div>
      </div>
      {certification.credentialId && (
        <p className="text-primary-600 dark:text-primary-300">
          Credential ID: {certification.credentialId}
        </p>
      )}
      {certification.credentialUrl && (
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-accent-600 dark:text-accent-400 hover:underline"
        >
          View Certificate →
        </a>
      )}
    </motion.div>
  );
};

const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    organization: "Amazon Web Services (AWS)",
    date: "Aug 2023",
    credentialUrl: "https://www.credly.com/go/zU9xNSoa",
    imageUrl: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    organization: "Microsoft",
    date: "Jun 2023",
    credentialId: "CD84D394677637FF",
    credentialUrl: "https://learn.microsoft.com/en-us/users/ankurkumarkasana-7527/credentials/certification/azure-administrator?tab=credentials-tab",
    imageUrl: "https://images.credly.com/size/680x680/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png"
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    organization: "Google Cloud",
    date: "Apr 2023",
    credentialId: "GCP-PCA-345678",
    credentialUrl: "https://www.credential.net/google-cloud-professional-architect",
    imageUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/28183008"
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-primary-900 dark:text-gray-100 mb-8 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.credentialId}
              certification={certification}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications; 