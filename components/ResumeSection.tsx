'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, ExternalLink } from 'lucide-react';

export default function ResumeSection({ resumeUrl }: { resumeUrl: string }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="resume" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex p-3 bg-primary/10 rounded-2xl mb-6">
                        <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Curriculum Vitae</h2>
                    <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                        Clean, formatted, and up-to-date. My resume highlights my technical skills, projects, and professional experience in detail.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                        >
                            <ExternalLink className="w-5 h-5" />
                            View Resume
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={resumeUrl}
                            download
                            className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-all"
                        >
                            <Download className="w-5 h-5" />
                            Download PDF
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
