import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import vinayvamsheeResume from './Vinay Vamshee Resume.pdf';
import vinayvamshee from './Images/VinayVamshee.png';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="hero-wrapper">
      <div className="noise-overlay" />
      <div className="ambient-glow">
        <div className="glow-1" />
        <div className="glow-2" />
      </div>

      <motion.div 
        className="hero-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-left">
          <motion.div className="hero-tag" variants={itemVariants}>
            Full-Stack Product Engineer • Solutions Architect • MERN Developer
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Creating enterprise software <br />
            with exceptional user experiences.
          </motion.h1>
          
          <motion.p className="hero-desc" variants={itemVariants}>
            Engineering configurable business platforms, metadata-driven architectures, and scalable full-stack software. I turn complex enterprise workflows into clean, high-performance digital products.
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <NavLink to="/Projects" className="btn-primary">
              View Showcase
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </NavLink>
            <a href={vinayvamsheeResume} download="Vinay_Vamshee_Resume.pdf" className="btn-secondary">
              Download CV
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5V8.29289L10.1464 6.14645C10.3417 5.95118 10.6583 5.95118 10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355L7.85355 9.85355C7.65829 10.0488 7.34171 10.0488 7.15355 9.85355L4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645C4.34171 5.95118 4.65829 5.95118 4.85355 6.14645L7 8.29289V2.5C7 2.22386 7.22386 2 7.5 2ZM2 11.5C2 11.2239 2.22386 11 2.5 11H12.5C12.7761 11 13 11.2239 13 11.5C13 11.7761 12.7761 12 12.5 12H2.5C2.22386 12 2 11.7761 2 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </a>
          </motion.div>
          
          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <span className="stat-num cyan">7+</span>
              <span className="stat-label">Production Platforms</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">1</span>
              <span className="stat-label">Published Patent</span>
            </div>
            <div className="stat-item">
              <span className="stat-num purple">88K+</span>
              <span className="stat-label">Lines Architected</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Out of the Box Portrait */}
          <div className="out-of-box-wrapper" id="home-portrait-anchor">
            {/* Offset tilted border outline */}
            <div className="box-frame-outline" />

            {/* Main tilted colored card */}
            <div className="box-frame-card">
              <div className="box-grid-lines" />
              <div className="box-glow-corner" />
            </div>

            {/* Popping-out person container */}
            <div className="box-person-container">
              <img 
                src={vinayvamshee} 
                alt="Vinay Vamshee" 
                className="box-person-img"
                draggable="false"
              />
            </div>

            {/* Ambient radial glow */}
            <div className="box-ambient-glow" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

