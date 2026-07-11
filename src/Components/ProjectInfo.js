import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProjectInfo() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const location = useLocation();
  const { project } = location.state || {};

  if (!project) {
    return (
      <div className="page-section" style={{ textAlign: 'center', padding: '200px 0' }}>
        <h2 className="section-title">Case Study Not Found</h2>
        <p className="section-subtitle" style={{ margin: '0 auto 40px auto' }}>
          Please go back to the catalog to select a valid product engineering case study.
        </p>
        <Link to="/Projects" className="btn-primary">Back to Catalog</Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

  const allImages = [project.imageSrc, ...(project.moreImages || [])];

  return (
    <div className="page-section" style={{ paddingTop: '120px' }}>
      <div className="noise-overlay" />
      <Link to="/Projects" className="btn-secondary" style={{ marginBottom: '30px', border: '1px solid var(--border-glass)' }}>
        ← Back to Showcase
      </Link>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="detail-hero">
          <div className="detail-glow" />
          <motion.span className="project-label" variants={itemVariants}>{project.tag}</motion.span>
          <motion.h1 className="section-title" variants={itemVariants} style={{ marginBottom: '16px' }}>{project.name}</motion.h1>
          <motion.p className="section-subtitle" variants={itemVariants} style={{ maxWidth: '800px', marginBottom: '0' }}>
            {project.description}
          </motion.p>
        </div>

        {/* Project Meta Metrics */}
        <motion.div className="detail-meta-grid" variants={itemVariants}>
          <div className="meta-item">
            <span className="meta-item-label">Deployment</span>
            <div className="meta-item-val">{project.fullDetails?.techStack?.deployment?.frontend || 'Vercel'}</div>
          </div>
          <div className="meta-item">
            <span className="meta-item-label">Auth System</span>
            <div className="meta-item-val">{project.fullDetails?.techStack?.auth || 'JWT Token'}</div>
          </div>
          <div className="meta-item">
            <span className="meta-item-label">Main Stack</span>
            <div className="meta-item-val">{project.fullDetails?.techStack?.frontend?.split(',')[0]} + {project.fullDetails?.techStack?.database}</div>
          </div>
          <div className="meta-item">
            <span className="meta-item-label">Timeline</span>
            <div className="meta-item-val">{project.fullDetails?.timeline?.[0]?.date?.split(' ')?.[1] || 'Active'} {project.fullDetails?.timeline?.[0]?.date?.split(' ')?.[2] || '2025'}</div>
          </div>
        </motion.div>

        {/* Interactive Gallery */}
        <motion.div className="gallery-section" variants={itemVariants} style={{ marginBottom: '60px' }}>
          <h3 className="timeline-title" style={{ fontSize: '1.4rem', marginBottom: '24px' }}>Product Snapshots & Interfaces</h3>
          <div className="gallery-grid">
            {allImages.filter(img => img).map((img, index) => (
              <div className="gallery-card" key={index}>
                <img src={img} alt={`Slide ${index + 1}`} className="gallery-img" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Links CTA */}
        <motion.div className="hero-buttons" variants={itemVariants} style={{ marginBottom: '60px' }}>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Launch Live Application
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3H6.5C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9005 2.19339 12.9377 2.24793 12.963 2.30806C12.9883 2.36819 13 2.43302 13 2.5V6C13 6.27614 12.7761 6.5 12.5 6.5C12.2239 6.5 12 6.27614 12 6V3.70711L7.85355 7.85355C7.65829 8.04882 7.34171 8.04882 7.14645 7.85355C6.95118 7.65829 6.95118 7.34171 7.14645 7.14645L11.2929 3H9C8.72386 3 8.5 2.77614 8.5 2.5C8.5 2.22386 8.72386 2 9 2H12.5C12.567 2 12.6318 2.01168 12.6919 2.03702C12.7521 2.06235 12.8066 2.09952 12.8536 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </a>
          )}
        </motion.div>

        {/* Content Body Grid */}
        <div className="detail-grid">
          <div className="detail-main">
            {project.fullDetails?.explanation && (
              <motion.div variants={itemVariants}>
                <h3 className="detail-section-title">Architectural Concept & Goals</h3>
                <p className="detail-text">{project.fullDetails.explanation}</p>
              </motion.div>
            )}

            {/* Features Row */}
            <motion.div variants={itemVariants} className="detail-info-grid">
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '16px' }}>User Workflows</h4>
                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {project.fullDetails?.features?.userFeatures?.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '16px' }}>Control Center / Admin</h4>
                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {project.fullDetails?.features?.adminFeatures?.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Requirements Details */}
            <motion.div variants={itemVariants} className="detail-info-grid">
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '16px' }}>Functional Spec</h4>
                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {project.fullDetails?.requirements?.functionalRequirements?.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '16px' }}>Performance & Quality</h4>
                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {project.fullDetails?.requirements?.nonFunctionalRequirements?.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Case Study Timeline */}
            {project.fullDetails?.timeline && (
              <motion.div variants={itemVariants} style={{ marginTop: '40px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '20px' }}>Development Milestones</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {project.fullDetails.timeline.map((tItem, tIdx) => (
                    <div key={tIdx} style={{ display: 'flex', borderBottom: '1px solid var(--border-glass)', paddingBottom: '10px', gap: '20px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', minWidth: '120px', fontSize: '0.9rem' }}>{tItem.date}</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{tItem.activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Specifications card */}
          <motion.div className="detail-sidebar" variants={itemVariants}>
            <div className="detail-spec-card">
              <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '24px' }}>System Stack</h4>
              <div className="tech-spec-list">
                <div className="tech-spec-item">
                  <span className="tech-spec-label">Frontend Libraries</span>
                  <span className="tech-spec-val">{project.fullDetails?.techStack?.frontend}</span>
                </div>
                <div className="tech-spec-item">
                  <span className="tech-spec-label">Server Host</span>
                  <span className="tech-spec-val">{project.fullDetails?.techStack?.backend}</span>
                </div>
                <div className="tech-spec-item">
                  <span className="tech-spec-label">Database Schema</span>
                  <span className="tech-spec-val">{project.fullDetails?.techStack?.database}</span>
                </div>
                <div className="tech-spec-item">
                  <span className="tech-spec-label">Session Control</span>
                  <span className="tech-spec-val">{project.fullDetails?.techStack?.auth || 'JWT Authentication'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
