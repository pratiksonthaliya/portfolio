import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolio-data.json';

const Achievements = () => {
  const { achievements } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="achievements" className="py-24 section-padding">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-4xl"
      >
        <div>
          <h2 className="text-4xl font-bold text-center">Achievements</h2>
          <div className="mt-6 space-y-8">
            {achievements.map((achieve, index) => (
              <motion.div 
                key={index} 
                className="p-6 border-l-4 border-accent bg-card shadow-md rounded-md"
                variants={sectionVariants}
              >
                <h3 className="text-xl font-semibold mb-3">{achieve.title}</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {achieve.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;


        
