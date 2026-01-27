'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection'; // Declared HeroSection
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection'; // Declared SkillsSection
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import LeadershipSection from '@/components/LeadershipSection';
import Footer from '@/components/Footer';
import Hero3D from '@/components/Hero3D'; // Declared Hero3D
import SkillsCards from '@/components/SkillsCards'; // Declared SkillsCards
import ResumeSection from '@/components/ResumeSection';

const portfolioData = {
    personal: {
        name: 'Kislay Kumar',
        role: 'Full Stack Web Developer',
        education: 'B.Tech in Electronics and Communication Engineering, IIIT Una (2022–2026)',
        email: 'kislaykk.work@gmail.com',
        phone: '+91-8002715382',
        linkedin: 'https://www.linkedin.com/in/kislay-kumar-494342259',
        github: 'https://github.com/kk3069kk',
        resumeUrl: '/resume.pdf', // Path to the resume in the public folder
        about:
            'I am a Full Stack Web Developer with experience in building scalable, production-ready web applications using React, Redux, Node.js, and modern backend technologies. I focus on clean code, performance optimization, and intuitive user interfaces. I have worked on real-world applications involving authentication, role-based access, API integrations, and performance tuning. Alongside development, I have taken leadership roles in technical clubs, coordinating teams and delivering impactful solutions. I enjoy solving complex problems, improving system performance, and continuously learning to grow as a software engineer.',
    },
    experience: [
        {
            company: 'Infrawave Solutions',
            role: 'SDE Intern – Full Stack Web Development',
            duration: 'May 2025 – August 2025',
            type: 'Remote',
            points: [
                'Developed responsive and high-performance user interfaces using React.js, Redux, and Tailwind CSS',
                'Improved application load speed by 20% through frontend optimization',
                'Built reusable components and scalable state management, reducing development time by 30%',
                'Debugged and optimized 50+ UI workflows for cross-device compatibility and smooth animations',
            ],
        },
    ],
    projects: [
        {
            title: 'ECOVA Club Website',
            description: 'Full-stack event platform with role-based access and end-to-end features, attracting 400+ views on day one.',
            tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Redux', 'MongoDB'],
            githubUrl: 'https://github.com/kk3069kk/Ecova',
            projectUrl: 'https://ecova.vercel.app/',
            highlights: [
                'Launched a full-stack event platform with role-based access and end-to-end features, attracting 400+ views on day one.',
                'Developed backend APIs and admin dashboards to manage 10+ events and track 300+ participants reliably.',
                'Implemented role-based access and production deployment for 100+ users on Vercel with persistent data.',
            ],
        },
        {
            title: 'Netflix GPT',
            description: 'AI-driven movie platform using React, Firebase, OpenAI, and TMDB APIs, serving 1,000+ movies.',
            tech: ['React', 'Redux Toolkit', 'Firebase', 'Tailwind CSS', 'TMDB API', 'OpenAI API'],
            githubUrl: 'https://github.com/kk3069kk/NetlifyGpt',
            projectUrl: 'https://netlify-gpt.vercel.app/',
            highlights: [
                'Architected an AI-driven movie platform using React, Firebase, OpenAI, and TMDB APIs, serving 1,000+ movies.',
                'Established secure access control and route protection through Firebase Auth, supporting 100+ active user sessions.',
                'Refined API consumption and UI performance using custom hooks and memoization, achieving 30% efficiency gains.',
            ],
        },
        {
            title: 'Social Website for Organization',
            description: 'Full-stack React + Vite application with reusable components and API-driven views, improving UI consistency.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            githubUrl: 'https://github.com/kk3069kk/social-organisation',
            projectUrl: 'https://kislay-social.vercel.app/',
            highlights: [
                'Engineered a full-stack React + Vite application with 8+ reusable components and API-driven views, improving UI consistency.',
                'Boosted end-to-end performance by 30% through optimized state flow, efficient data fetching, and component refactoring.',
                'Unified external APIs and production delivery, reducing bundle size by 20% through code-splitting and modern tooling.',
            ],
        },
    ],
    skills: {
        frontend: [
            'React',
            'Redux',
            'Redux Toolkit',
            'JavaScript (ES6+)',
            'HTML',
            'CSS',
            'Tailwind CSS',
            'Bootstrap',
        ],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'JWT', 'Firebase'],
        other: ['Git', 'GitHub', 'Postman', 'DSA', 'OOP', 'DBMS', 'Problem Solving'],
    },
    leadership: [
        {
            role: 'Secretary',
            organization: 'ECOVA Club, IIIT Una',
            description: 'Led 60+ members across 8 departments and coordinated 10+ events',
        },
        {
            role: 'Technical Head',
            organization: 'EPMOC Club, IIIT Una',
            description: 'Managed technical execution for 10+ college-level events',
        },
    ],
};

export default function Portfolio() {
    return (
        <main className="text-foreground overflow-hidden">
            <Navbar />
            <Hero3D />
            <AboutSection data={portfolioData.personal} />
            <SkillsCards skills={portfolioData.skills} />
            <ProjectsSection projects={portfolioData.projects} />
            <ExperienceSection experience={portfolioData.experience} />
            <LeadershipSection leadership={portfolioData.leadership} />
            <ResumeSection resumeUrl={portfolioData.personal.resumeUrl} />
            <Footer data={portfolioData.personal} />
        </main>
    );
}
