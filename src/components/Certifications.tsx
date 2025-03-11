import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolio-data.json';

const Certifications = () => {
  const { certifications } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="certifications" className="py-24 section-padding">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-4xl"
      >
        <div>
          <h2 className="text-4xl font-bold text-center">Certifications</h2>
          <div className="mt-6 space-y-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                className="p-4 border-l-4 border-primary bg-card shadow-md rounded-md"
                variants={sectionVariants}
              >
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.issuer} - {cert.year}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;


        
