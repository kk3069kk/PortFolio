'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code as CodeIcon, ChevronDown, Github } from 'lucide-react';
import { useState } from 'react';

export default function ProjectsSection({ projects }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section
            id="projects"
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
                    <div className="w-24 h-1 bg-primary rounded-full mx-auto opacity-50" />
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work, built with modern technologies and a focus on performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            whileHover={{ scale: 1.02 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col cursor-pointer"
                            onClick={() => window.open(project.projectUrl || '#', '_blank')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="p-6 flex flex-col h-full z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                                        <CodeIcon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <a
                                            href={project.githubUrl || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:text-primary transition-colors z-20"
                                            title="View Code"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.projectUrl || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:text-primary transition-colors z-20"
                                            title="Live Demo"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex-grow">
                                    <p className="text-muted-foreground mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                        {project.description}
                                    </p>

                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-foreground/80 mb-6 pt-2 border-t border-white/5">
                                                    {project.highlights.map((highlight, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ x: -10, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: i * 0.1 }}
                                                        >
                                                            {highlight}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs px-2.5 py-1 bg-primary/5 text-primary rounded-md font-medium border border-primary/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
