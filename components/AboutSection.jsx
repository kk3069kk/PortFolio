'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutSection({ data }) {
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

    return (
        <section
            id="about"
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border"
        >
            <motion.div
                className="space-y-16"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {/* Section header */}
                <motion.div variants={itemVariants}>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-2">About Me</h2>
                    <div className="w-12 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Education and Contact */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <div className="space-y-8">
                            {/* Education */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        Education
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground leading-relaxed">{data.education}</p>
                                </CardContent>
                            </Card>

                            {/* Contact */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        Get in Touch
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <a
                                            href={`mailto:${data.email}`}
                                            className="block text-foreground hover:text-primary transition-colors duration-300 break-all"
                                        >
                                            {data.email}
                                        </a>
                                        <a
                                            href={`tel:${data.phone}`}
                                            className="block text-foreground hover:text-primary transition-colors duration-300"
                                        >
                                            {data.phone}
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Biography */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold">
                                    My Journey
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-foreground leading-relaxed">{data.about}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
