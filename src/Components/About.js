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
      title: 'Languages & CRM',
      icon: <FaCode />,
      skills: ['Java', 'JavaScript (ES6+)', 'Apex', 'Python', 'HTML5/CSS3']
    },
    {
      title: 'Frontend & UI',
      icon: <FaCode />,
      skills: ['React', 'Lightning Web Components (LWC)', 'Redux', 'Framer Motion', 'Bootstrap']
    },
    {
      title: 'Backend & DB',
      icon: <FaServer />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Redis', 'MongoDB']
    },
    {
      title: 'Architecture & Cloud',
      icon: <FaDatabase />,
      skills: ['SaaS Design', 'Salesforce CRM', 'Dynamic Form Builders', 'Metadata Driven Systems']
    },
    {
      title: 'Tools & DevOps',
      icon: <FaTools />,
      skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Streamlit', 'Notion']
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
          I'm Pechetti Vinay Vamshee, a Computer Science graduate from VIT Vellore and currently a Salesforce Developer. I specialize in building production-grade software platforms, corporate automation tools, and dynamic metadata architectures.
        </motion.p>

        <div className="about-grid">
          {/* Bio Column */}
          <motion.div className="about-bio" variants={itemVariants}>
            <p>
              Driven by a deep passion for digital craftsmanship and technical excellence, I specialize in full-stack engineering utilizing the <strong>MERN stack</strong>, <strong>Salesforce Development (Apex/LWC)</strong>, and <strong>Java</strong>.
            </p>
            <p>
              My work spans from building custom ERP solutions for educational centers to deploying real-time asset management and logging systems for enterprise clients. These systems have a direct operational impact, managing hundreds of active users and processing vital transaction records daily.
            </p>
            <p>
              I design for flexibility, building metadata-driven dashboards and custom schema layers that replace rigid structures. I believe software should grow alongside the business without demanding constant updates.
            </p>
          </motion.div>

          {/* Education / Career Timeline */}
          <motion.div className="about-timeline" variants={itemVariants}>
            <h3 className="timeline-title">Academic & Progression</h3>
            <div className="timeline-wrapper">
              
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">2025 - Present</div>
                <div className="timeline-card">
                  <div className="timeline-inst">Salesforce Developer</div>
                  <div className="timeline-degree">Cloud Systems & Enterprise Development</div>
                  <span className="timeline-grade">2x Certified Salesforce Developer</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">2021 - 2025</div>
                <div className="timeline-card">
                  <div className="timeline-inst">Vellore Institute of Technology</div>
                  <div className="timeline-degree">B.Tech in Computer Science and Engineering</div>
                  <span className="timeline-grade">CGPA: 8.08 / 10 (Graduated 2025)</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">2020 - 2021</div>
                <div className="timeline-card">
                  <div className="timeline-inst">Brilliant Public School, Bilaspur</div>
                  <div className="timeline-degree">Class 12 (CBSE Board)</div>
                  <span className="timeline-grade">Grade: 80.4%</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">2018 - 2019</div>
                <div className="timeline-card">
                  <div className="timeline-inst">Brilliant Public School, Bilaspur</div>
                  <div className="timeline-degree">Class 10 (CBSE Board)</div>
                  <span className="timeline-grade">Grade: 84%</span>
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
