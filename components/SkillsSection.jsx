'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SkillsSection({ skills }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 },
        },
        hover: {
            backgroundColor: 'rgba(112, 177, 255, 0.15)',
            borderColor: 'rgba(112, 177, 255, 0.5)',
            y: -2,
            transition: { duration: 0.2 },
        },
    };

    const categories = [
        { title: 'Frontend', skills: skills.frontend },
        { title: 'Backend', skills: skills.backend },
        { title: 'Tools & Others', skills: skills.other },
    ];

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
                    <h2 className="text-4xl sm:text-5xl font-bold mb-2">Skills & Expertise</h2>
                    <div className="w-12 h-1 bg-primary rounded-full" />
                </motion.div>

                {/* Skills grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <motion.div key={category.title} variants={itemVariants}>
                            <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        variants={skillVariants}
                                        whileHover="hover"
                                        className="px-4 py-2 rounded-lg border border-border bg-secondary/10 text-foreground cursor-default"
                                    >
                                        <span className="text-sm font-medium">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
