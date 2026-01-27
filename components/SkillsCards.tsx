'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillsCardsProps {
  skills: {
    frontend: string[];
    backend: string[];
    other: string[];
  };
}

export default function SkillsCards({ skills }: SkillsCardsProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      skills: skills.frontend,
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      skills: skills.backend,
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      skills: skills.other,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Technical skills developed through real-world projects and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative group overflow-hidden rounded-2xl border-2 ${category.borderColor} bg-gradient-to-br ${category.color} p-8 backdrop-blur-sm hover:border-opacity-100 transition-all duration-300`}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white to-transparent transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{category.title}</h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-card/50 border border-border rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/50 transition-all duration-200 backdrop-blur-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border/50"
        >
          <p className="text-center text-foreground/80 leading-relaxed text-balance">
            I continuously expand my technical expertise through hands-on development, staying updated with
            industry trends, and implementing best practices in performance optimization, scalable architecture,
            and clean code principles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
