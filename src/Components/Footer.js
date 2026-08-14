import React, { useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import vinayvamsheeResume from './Vinay Vamshee Resume.pdf';

export default function Footer() {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_poxj9kb', 'template_225lx4r', form.current, 'MMiGPMm9m6ZYRwisE')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email. Please try again.');
      })
      .finally(() => {
        setIsSending(false);
      });
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
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input 
                type="text" 
                name="from_name"
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
                name="reply_to"
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
                name="message"
                className="form-input" 
                rows="4" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let's build a new product..." 
                required 
              />
            </div>
            
            <button type="submit" className="form-submit-btn" disabled={isSending}>
              {isSending ? 'Sending...' : submitted ? 'Message Sent ✓' : 'Send Message'}
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
