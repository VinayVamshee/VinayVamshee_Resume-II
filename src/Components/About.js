import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const skillGroups = [
    {
      title: 'Languages & Core',
      icon: <FaCode />,
      skills: ['Java', 'JavaScript (ES6+)', 'Apex', 'Python', 'HTML5/CSS3']
    },
    {
      title: 'Frontend & UI',
      icon: <FaCode />,
      skills: ['React', 'Lightning Web Components (LWC)', 'TanStack Query', 'Framer Motion', 'Bootstrap']
    },
    {
      title: 'Backend & DB',
      icon: <FaServer />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'MongoDB', 'Mongoose']
    },
    {
      title: 'Architecture & Cloud',
      icon: <FaDatabase />,
      skills: ['Multi-Tenant SaaS', 'Metadata Driven Systems', 'Service Cloud', 'Salesforce CRM']
    },
    {
      title: 'AI & Modern Tools',
      icon: <FaTools />,
      skills: ['OpenAI GPT-4o', 'LangChain', 'YOLOv8', 'Git / GitHub', 'Vercel']
    }
  ];

  return (
    <div className="page-section">
      <div className="noise-overlay" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Who I Am & What I Architect
        </motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Full-Stack Product Engineer and Solutions Architect specializing in metadata-driven web platforms, enterprise architectures, and configurable business systems that replace rigid software with dynamic tools.
        </motion.p>

        <div className="about-grid">
          {/* Bio Column */}
          <motion.div className="about-bio" variants={itemVariants}>
            <p>
              Driven by digital craftsmanship and technical precision, I specialize in full-stack web engineering utilizing <strong>React, Node.js, Express, and MongoDB</strong>, alongside enterprise cloud systems with <strong>Apex, LWC, and Service Cloud</strong>.
            </p>
            <p>
              My work spans from architecting multi-tenant SaaS ERP platforms to building commercial inventory and ledger engines for retail clients, as well as operational logging systems for railway divisions that replaced manual paper registers.
            </p>
            <p>
              I design for adaptability—building metadata-driven architectures and schema layers that allow business workflows and data structures to expand smoothly as organizations scale.
            </p>
          </motion.div>

          {/* Education / Career Timeline */}
          <motion.div className="about-timeline" variants={itemVariants}>
            <h3 className="timeline-title">Career & Achievements</h3>
            <div className="timeline-wrapper">

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">2025 - Present</div>
                <div className="timeline-card">
                  <div className="timeline-inst">Enterprise Salesforce Developer</div>
                  <div className="timeline-degree">Cloud Systems, Apex, LWC & Service Cloud</div>
                  <span className="timeline-grade">Salesforce Certified Platform Administrator</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">Mar 2026</div>
                <div className="timeline-card">
                  <div className="timeline-inst">Enterprise AI Hackathon Winner</div>
                  <div className="timeline-degree">1st Place Winner & Regional Finalist</div>
                  <span className="timeline-grade">Smart Data Pipeline Debugger (GPT-4o, LangChain, Streamlit)</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">Jan 2026</div>
                <div className="timeline-card">
                  <div className="timeline-inst">Published Patent Co-Inventor</div>
                  <div className="timeline-degree">Indian Patent Application 202541127889</div>
                  <span className="timeline-grade">Helmet & License Plate Detection using YOLO & OCR</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">2025</div>
                <div className="timeline-card">
                  <div className="timeline-inst">Conference Research Co-Author</div>
                  <div className="timeline-degree">International Conference on Electronics, AI and Computing</div>
                  <span className="timeline-grade">Automated Table Data Extraction using OCR</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">2021 - 2025</div>
                <div className="timeline-card">
                  <div className="timeline-inst">Vellore Institute of Technology (VIT)</div>
                  <div className="timeline-degree">B.Tech in Computer Science and Engineering</div>
                  <span className="timeline-grade">CGPA: 8.08 / 10 • Graduated 2025</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div className="skills-container" variants={itemVariants}>
          <h3 className="timeline-title" style={{ marginBottom: '40px' }}>Skills & Expertise</h3>
          <div className="skills-groups">
            {skillGroups.map((group, gIdx) => (
              <div className="skills-group-card" key={gIdx}>
                <div className="skills-group-title">
                  {group.icon}
                  {group.title}
                </div>
                <div className="skills-list">
                  {group.skills.map((skill, sIdx) => (
                    <span className="skill-tag" key={sIdx}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
