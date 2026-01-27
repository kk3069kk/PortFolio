'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

interface LeadershipData {
  role: string;
  organization: string;
  description: string;
}

export default function LeadershipSection({ leadership }: { leadership: LeadershipData[] }) {
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">Leadership & Community</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Leadership grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((role) => (
            <motion.div
              key={role.role}
              variants={cardVariants}
              whileHover="hover"
              className="border border-border rounded-xl overflow-hidden transition-all duration-300 p-6 sm:p-8"
            >
              {/* Icon and title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                    {role.role}
                  </h3>
                  <p className="text-primary font-semibold">{role.organization}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground leading-relaxed text-sm sm:text-base">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
