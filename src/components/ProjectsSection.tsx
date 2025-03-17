import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolio-data.json';

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-12 md:py-24 relative section-padding bg-muted/30">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <motion.div className="text-center mb-8 md:mb-16" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mt-2">Stuff that I've built</h2>
            <p className="text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto px-4">
              Check out some of my recent projects and applications.
            </p>
          </motion.div>
          
          <motion.div className="flex flex-col gap-6 md:gap-12" variants={itemVariants}>
            {projects.slice(0, 6).map((project) => (
              <motion.div
                key={project.id}
                className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-card p-4 sm:p-6 rounded-xl shadow-lg border border-border/30 hover:border-primary/20 transition-all hover:shadow-2xl"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
              >
                {/* Project image - full width on mobile, fixed width on larger screens */}
                <div className="w-full md:w-72 h-44 overflow-hidden relative rounded-lg md:flex-shrink-0 mb-4 md:mb-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-60"></div>
                </div>
                
                {/* Project details with tech stack and links */}
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{project.title}</h3>
                    
                    {/* Buttons in a flex row that wraps on small screens */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                      {(project.liveDisabled !== true && project.link) && (
                        <a 
                          href={project.link} 
                          className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg gap-1 sm:gap-2 whitespace-nowrap btn-primary shadow-lg hover:shadow-xl"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <span>Visit</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <path d="M15 3h6v6"/>
                            <path d="m10 14 11-11"/>
                          </svg>
                        </a>
                      )}
                      {(project.extension) && (
                        <a 
                          href={project.extension} 
                          className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg gap-1 sm:gap-2 whitespace-nowrap btn-primary shadow-lg hover:shadow-xl"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <span>Chrome Extension</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <path d="M15 3h6v6"/>
                            <path d="m10 14 11-11"/>
                          </svg>
                        </a>
                      )}
                      {(project.codeDisabled !== true && project.github) && (
                        <a 
                          href={project.github || '#'} 
                          className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg gap-1 sm:gap-2 whitespace-nowrap btn-secondary shadow-lg hover:shadow-xl"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <span>Github</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                        </a>
                      )}
                      {(project.frontendCodeDisabled !== true && project['frontend-github']) && (
                        <a 
                          href={project['frontend-github'] || '#'} 
                          className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg gap-1 sm:gap-2 whitespace-nowrap btn-secondary shadow-lg hover:shadow-xl"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <span>Github: Client</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                        </a>
                      )}
                      {(project.backendCodeDisabled !== true && project['backend-github']) && (
                        <a 
                          href={project['backend-github'] || '#'} 
                          className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg gap-1 sm:gap-2 whitespace-nowrap btn-secondary shadow-lg hover:shadow-xl"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <span>Github: Server</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="list-disc list-inside text-muted-foreground text-xs sm:text-sm mb-3 space-y-1 sm:space-y-2 pl-1">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 text-xs">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-2 sm:px-3 py-1 text-xs font-xs rounded-full bg-gray-200 text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-10 md:mt-16 text-center"
            variants={itemVariants}
          >
            <a 
              href={portfolioData.personal.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glass btn-icon text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5"
            >
              <span>View All Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <path d="M15 3h6v6"/>
                <path d="m10 14 11-11"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;