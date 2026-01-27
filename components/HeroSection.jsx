'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';

export default function HeroSection({ data }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background gradient accent */}
            <div className="absolute inset-0 -top-40 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
            </div>

            <motion.div
                className="relative z-10 max-w-5xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Main heading */}
                <motion.div variants={itemVariants} className="mb-8">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-balance leading-tight">
                        {data.name}
                    </h1>
                    <p className="text-xl sm:text-2xl text-muted-foreground font-light">{data.role}</p>
                </motion.div>

                {/* Contact information */}
                <motion.div variants={itemVariants} className="mb-12">
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                        Building scalable, production-ready web applications with clean code and modern technologies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <a
                            href={`mailto:${data.email}`}
                            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                        >
                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{data.email}</span>
                        </a>
                        <a
                            href={`tel:${data.phone}`}
                            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                        >
                            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{data.phone}</span>
                        </a>
                    </div>
                </motion.div>

                {/* Social links */}
                <motion.div variants={itemVariants} className="flex gap-4 items-center">
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    variants={itemVariants}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDown className="w-6 h-6 text-muted-foreground opacity-50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
