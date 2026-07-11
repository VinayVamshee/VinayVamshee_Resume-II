import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import vinayvamsheeResume from './Vinay Vamshee Resume.pdf';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="page-section" style={{ borderTop: '1px solid var(--border-glass)', paddingBottom: '40px' }}>
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-big-text">
            Let's build <br />
            something amazing.
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '20px' }}>
            Whether you are looking for an enterprise platform architect, custom metadata builder, or a senior product developer, let's connect.
          </p>

          <div className="contact-channels">
            <a href="mailto:vinayvamshee2183@gmail.com" className="contact-channel-item">
              <FaEnvelope className="contact-channel-icon" />
              <div className="contact-channel-details">
                <span className="contact-channel-label">Email</span>
                <span className="contact-channel-val">vinayvamshee2183@gmail.com</span>
              </div>
            </a>
            
            <a href="https://in.linkedin.com/in/pechetti-vinay-vamshee-251245231" target="_blank" rel="noopener noreferrer" className="contact-channel-item">
              <FaLinkedin className="contact-channel-icon" />
              <div className="contact-channel-details">
                <span className="contact-channel-label">LinkedIn</span>
                <span className="contact-channel-val">linkedin.com/in/vinay-vamshee</span>
              </div>
            </a>

            <a href="https://github.com/VinayVamshee" target="_blank" rel="noopener noreferrer" className="contact-channel-item">
              <FaGithub className="contact-channel-icon" />
              <div className="contact-channel-details">
                <span className="contact-channel-label">GitHub</span>
                <span className="contact-channel-val">github.com/VinayVamshee</span>
              </div>
            </a>

            <a href={vinayvamsheeResume} download="Vinay_Vamshee_Resume.pdf" className="contact-channel-item">
              <FaFileAlt className="contact-channel-icon" />
              <div className="contact-channel-details">
                <span className="contact-channel-label">Resume</span>
                <span className="contact-channel-val">Download CV</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input 
                type="text" 
                className="form-input" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Pechetti Vinay" 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-input" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="vinay@example.com" 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                className="form-input" 
                rows="4" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let's build a new product..." 
                required 
              />
            </div>
            
            <button type="submit" className="form-submit-btn">
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-wrap">
        <div className="footer-content">
          <span>© {new Date().getFullYear()} Vinay Vamshee. Crafted with passion.</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>MERN & Product Engineering</span>
        </div>
      </div>
    </div>
  );
}
