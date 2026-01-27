'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

interface PersonalData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export default function Footer({ data }: { data: PersonalData }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
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

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-border mt-20">
      <motion.div
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left side - Message */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Let's Build Something Great</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm always interested in collaborating on meaningful projects and exploring new opportunities. Whether you have a question or just want to say hello, feel free to reach out.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </motion.div>

          {/* Right side - Contact info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Contact Information
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="break-all">{data.email}</span>
                </a>
                <a
                  href={`tel:${data.phone}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{data.phone}</span>
                </a>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Connect
              </h4>
              <div className="flex gap-4">
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider and copyright */}
        <motion.div variants={itemVariants} className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {currentYear} {data.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              Built with
              <Heart className="w-4 h-4 text-primary fill-primary" />
              using React & Tailwind CSS
            </div>
          </div>
        </motion.div>
      </motion.div>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        userEmail={data.email}
      />
    </footer>
  );
}
