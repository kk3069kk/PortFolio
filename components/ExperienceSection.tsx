'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface ExperienceData {
  company: string;
  role: string;
  duration: string;
  type: string;
  points: string[];
}

export default function ExperienceSection({ experience }: { experience: ExperienceData[] }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      borderColor: 'rgba(112, 177, 255, 0.5)',
      backgroundColor: 'rgba(112, 177, 255, 0.05)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border"
    >
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section header */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">Professional Experience</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Experience items */}
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              variants={cardVariants}
              whileHover="hover"
              className="border border-border rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="p-6 sm:p-8">
                {/* Header with company and role */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    </div>
                  </div>

                  {/* Duration and type */}
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border my-6" />

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="text-foreground flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                      >
                        <span className="text-primary font-bold mt-1">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
