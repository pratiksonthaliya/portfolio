
import { useState } from 'react';
import { color, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { RiReactjsLine, RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { SiMongodb, SiMysql, SiPrisma, SiSpringboot, SiTailwindcss, SiYaml } from "react-icons/si";
import { FaNodeJs, FaDocker, FaBrain, FaDatabase, FaCogs, FaTrophy, FaJava, FaAws } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiGit, SiLinux, SiAnsible, SiGnubash, SiCplusplus, SiGraphql, SiOracle } from "react-icons/si";
import { PiGraph } from "react-icons/pi";
import { GiCrafting } from "react-icons/gi";
import { DiRedis } from "react-icons/di";

const skillsData = {
	skills: [
		{
			title: "CS Fundamentals",
			skills: [
        { name: "Data Structures & Algorithms", icon: PiGraph, color: "#1E90FF" },
        { name: "Object-Oriented Programming", icon: FaBrain, color: "#FFD700" },
        { name: "Database Management System", icon: FaDatabase, color: "#FF4500" },
        { name: "Operating Systems", icon: FaCogs, color: "#FF5733" },
        { name: "System Design", icon: GiCrafting, color: "#1E90FF" },
				{ name: "Competitive Programming", icon: FaTrophy, color: "#1E90FF" }
			]
		},
    {
			title: "Programming Languages",
			skills: [
				{ name: "JavaScript", icon: RiJavascriptFill, color: "#F7DF1E" },
				{ name: "TypeScript", icon: BiLogoTypescript, color: "#3178C6" },
				{ name: "Java", icon: FaJava, color: "#EE0000" },
				{ name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "SQL", icon: FaDatabase, color: "#FF4500" },
			]
		},
		{
			title: "Frameworks & Libraries",
			skills: [
				{ name: "React", icon: RiReactjsLine, color: "#61DAFB" },
				{ name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
				{ name: "HTML/CSS", icon: TbBrandNextjs, color: "#E34F26" },
				{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
				{ name: "Express", icon: FaNodeJs, color: "#000000" },
				{ name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
				{ name: "Prisma", icon: SiPrisma, color: "#2D3748" }
			]
		},
		{
			title: "Databases & APIs",
			skills: [
				{ name: "MongoDB", icon: SiMongodb, color: "#47A248" },
				{ name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791" },
				{ name: "MySQL", icon: SiMysql, color: "#00758F" },
        { name: "Redis", icon: DiRedis, color: "#D82C20" },
        { name: "RESTful APIs", icon: TbApi, color: "#FF5733" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
			]
		},
		{
			title: "DevOps & Tools",
			skills: [
				{ name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "Git / GitHub", icon: SiGit, color: "#F05032" },
				{ name: "Docker", icon: FaDocker, color: "#2496ED" },
				{ name: "AWS", icon: FaAws, color: "#FF9900" },
				{ name: "Ansible", icon: SiAnsible, color: "#EE0000" },
        { name: "YAML", icon: SiYaml, color: "#623CE4" },
				{ name: "Shell / Bash Scripting", icon: SiGnubash, color: "#4EAA25" },
        { name: "Oracle Cloud Infrastructure (OCI)", icon: SiOracle, color: "#F80000" }
			]
		}
	]
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    initial: { y: -15},
    animate: {
      y: [15, -15],
      transition: {
        duration: Math.random()*4 + Math.random()*2,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Get category-based colors to maintain visual grouping
  const getCategoryColor = (categoryIndex: number) => {
    switch(categoryIndex) {
      case 0: return "from-primary/50 to-primary/5"; // Frontend - purple
      case 1: return "from-accent/50 to-accent/5"; // Backend - teal
      case 2: return "from-blue-500/50 to-blue-500/5"; // Database - blue
      case 3: return "from-green-500/50 to-green-500/5"; // Tools - green
      default: return "from-primary/50 to-primary/5";
    }
  };

  return (
    <section id="skills" className="py-24 relative section-padding">
      <motion.div 
        ref={ref}
        className="container mx-auto max-w-7xl"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">My Technical Skills</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here's what I'm good at - both technical and soft skills.
          </p>
        </motion.div>
        
        {/* Enhanced Skill Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsData.skills.map((category, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeCategory === index 
                  ? 'bg-primary/80 text-white shadow-md shadow-primary/30 border-primary/50 shadow-[0_6px_16px_rgba(var(--primary),0.4)]' 
                  : 'bg-muted/60 text-muted-foreground hover:bg-muted/80 border-muted/40 hover:shadow-md'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
            >
              {category.title}
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 "
          variants={containerVariants}
          key={activeCategory} // Force re-render on category change
          initial="hidden"
          animate="visible"
        >
          {skillsData.skills[activeCategory].skills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
                key={index}
                className={`overflow-hidden rounded-xl bg-gradient-to-br ${getCategoryColor(activeCategory)} shadow-sm hover:shadow-md transition-all duration-300`}
                variants={skillVariants}
                initial="initial"
                animate= "animate"
                whileInView="animate"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="p-6 flex flex-col items-center justify-center h-full backdrop-blur-sm bg-card/50">
                  {SkillIcon && <SkillIcon size={40} color={skill.color} />}
                  <h3 className="font-medium text-center text-md">{skill.name}</h3>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
