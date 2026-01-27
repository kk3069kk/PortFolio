'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';
import { Github, Linkedin, FileText } from 'lucide-react';
import ContactModal from './ContactModal';

function ParticleField() {
  const { resolvedTheme } = useTheme();
  const count = 2000;
  const mesh = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z

      // Theme-aware colors (blue-ish/purple-ish)
      if (Math.random() > 0.5) {
        color.set(resolvedTheme === 'dark' ? '#6366f1' : '#4f46e5'); // Indigo
      } else {
        color.set(resolvedTheme === 'dark' ? '#818cf8' : '#a5b4fc'); // Light Indigo
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, [resolvedTheme]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Gentle wave motion
      mesh.current.geometry.attributes.position.array[i3 + 1] += Math.sin(time * 0.5 + mesh.current.geometry.attributes.position.array[i3]) * 0.002;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.05; // Slow rotation
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function Hero3D() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        gl={{ antialias: true, alpha: true }}
      >


        <ParticleField />

        {resolvedTheme === 'dark' && (
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
        )}
      </Canvas>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"> {/* Added pointer-events-none to container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center px-4 pointer-events-auto" // Re-enable pointer events for content
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance drop-shadow-2xl" // Added drop-shadow
          >
            Kislay Kumar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-foreground/90 mb-8 text-balance drop-shadow-lg font-medium" // Increased opacity & weight
          >
            Full Stack Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-foreground/80 mb-8 max-w-2xl text-balance drop-shadow-md"
          >
            Building scalable, production-ready web applications with React, Node.js, and modern technologies
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex gap-4 justify-center mb-8"
          >
            <a
              href="https://github.com/kk3069kk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border shadow-sm pointer-events-auto"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kislay-kumar-494342259"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border shadow-sm pointer-events-auto"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(112, 177, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              Get In Touch
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all shadow-lg backdrop-blur-sm"
            >
              View My Work
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all shadow-lg backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <svg
            className="w-6 h-6 text-primary drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        userEmail="kislaykk.work@gmail.com"
      />
    </div>
  );
}
