import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import CCC from './Images/CCC-Page.png';
import IRWSI from './Images/IRWSI-Page.png';
import RRR from './Images/RRR-Page.png';
import ABC from './Images/Screenshot 2025-12-21 at 17.31.04.png';
import Helmet from './Images/Helmet.png';
import MaguvasCover from './Images/Screenshot 2025-06-11 at 11.59.16.png';

export default function Projects() {
  const navigate = useNavigate();

  const [websites] = useState([
    {
      id: 'SSS',
      imageSrc: "https://i.ibb.co/7xm0Ls1M/Screenshot-2025-04-06-at-17-49-30.png",
      liveUrl: 'https://sss-school-scholastic-system.vercel.app/',
      name: 'School Scholastic System (SSS)',
      githubUrl: 'https://github.com/VinayVamshee/SSS-School-Scholastic-System.git',
      description: 'An enterprise-grade School ERP platform designed to digitize and streamline every aspect of academic and administrative operations using a metadata-driven architecture.',
      tag: 'Enterprise School Management Platform',
      colorGlow: 'rgba(161, 0, 255, 0.08)',
      moreImages: [
        "https://i.ibb.co/TBkZPkRm/Screenshot-2025-06-11-at-00-11-23.png",
        "https://i.ibb.co/tMcRMGdW/Screenshot-2025-06-11-at-00-11-35.png",
        "https://i.ibb.co/270QDDZM/Screenshot-2025-06-11-at-00-12-17.png",
        "https://i.ibb.co/Z6nQfT1M/Screenshot-2025-06-11-at-00-12-39.png"
      ],
      fullDetails: {
        intro: `School Scholastic System (SSS) is an enterprise-grade School ERP platform designed to digitize and streamline every aspect of academic and administrative operations. Built using the MERN stack, the platform follows a scalable, metadata-driven architecture that allows schools to configure forms, workflows, and academic structures dynamically without requiring code changes.`,
        description: `Unlike traditional school management systems that rely on hardcoded modules, SSS provides a highly configurable platform where administrators can manage students, classes, academic years, examinations, fees, admissions, promotions, attendance, report cards, and organizational settings from a centralized dashboard.`,
        features: {
          userFeatures: [
            '👨‍🎓 Student enrollment with full details: Name, DOB, Aadhar, Class, Section, Guardian bio, and photo',
            '✏️ Fully editable profiles post enrollment',
            '📥 Downloadable fee receipts and payment logs',
            '🖥️ Clean, responsive UI with grid and list toggles'
          ],
          adminFeatures: [
            '🛠️ Master Data control (School name, logo, address reflected site-wide)',
            '⚙️ Student lifecycle management: Promotion engines, dropouts logging, and automated TC generation',
            '💰 Year-wise fee structure configurations & payment tracking',
            '📊 Expected vs. collected fee analytics & Excel reports export'
          ]
        },
        techStack: {
          frontend: 'React.js, Bootstrap, Tailwind CSS, Javascript',
          backend: 'Node.js, Express.js',
          database: 'MongoDB',
          auth: 'JWT (JSON Web Token)',
          deployment: {
            frontend: 'Vercel',
            backend: 'Vercel'
          }
        },
        timeline: [
          { date: '16 Feb 2025', activity: 'Initial planning, database schema design, and kickoff' },
          { date: '17-20 Feb 2025', activity: 'Developed database schema, base layout UI, and student forms' },
          { date: '21-23 Feb 2025', activity: 'Core backend APIs, first frontend integration, and Initial Deployment' },
          { date: '21-29 Mar 2025', activity: 'Major visual redesign, multiple themes, and animations' },
          { date: '30 Mar 2025', activity: 'Visual Upgrade Deployment with full mobile responsiveness' }
        ],
        requirements: {
          functionalRequirements: [
            '✅ Student enrollment with photo uploads via ImgBB',
            '✅ Session promotion and TC dropouts workflow',
            '✅ Payment records collection and receipts'
          ],
          nonFunctionalRequirements: [
            '📱 Multi-theme support (Light/Dark toggles)',
            '⚡ Reusable and clean modular component structure'
          ]
        },
        explanation: `SSS emphasizes flexibility through dynamic form generation, configurable master data, and reusable APIs. Its modular architecture enables institutions of different sizes to customize the system according to their operational requirements while maintaining high performance.`
      }
    },
    {
      id: 'ABC',
      imageSrc: ABC,
      liveUrl: '',
      name: 'ABC – Advanced Business Console',
      githubUrl: 'https://github.com/VinayVamshee/Project-ABC.git',
      description: 'A centralized business operating platform designed to manage operational records, transactions, inventory, and dynamic schemas without database rebuilds.',
      tag: 'Enterprise Business Operating Platform',
      colorGlow: 'rgba(0, 242, 254, 0.08)',
      moreImages: [],
      fullDetails: {
        intro: `ABC (Advanced Business Console) is a MERN-stack administrative console designed to manage operational records, inventory, and custom billing workflows through a dynamic field-driven architecture.`,
        description: `By eliminating hardcoded modules, ABC acts as a digital operating system for small-to-medium retail and service businesses. It provides complete control over purchasing, sales, payments, customer registers, and ledger tracking.`,
        features: {
          userFeatures: [
            '📦 Dynamic product creation with admin-defined attributes (weight, size, purity, files)',
            '🧾 Multi-item order creation independent of stock logs',
            '💳 Flexible multi-mode payments (Cash, UPI, Card, Exchange) per transaction'
          ],
          adminFeatures: [
            '🛠️ Admin CMS metadata manager (configure inputs, rules, and tables)',
            '📈 Auto-calculated profit margins (Final Price minus cost price)',
            '📊 Expected vs. paid summaries and Excel data export'
          ]
        },
        techStack: {
          frontend: 'React, Custom CSS, Bootstrap elements',
          backend: 'Node.js, Express.js',
          database: 'MongoDB + Mongoose',
          auth: 'JWT Authentication',
          deployment: {
            frontend: 'Vercel',
            backend: 'Vercel'
          }
        },
        timeline: [
          { date: '09 Nov 2025', activity: 'Kickoff: dynamic entities, schema architectures, and payments modules' },
          { date: '16 Nov 2025', activity: 'Completed first usable Inventory UI and file uploads' },
          { date: '30 Nov 2025', activity: 'Implemented selling flows, profit margins, and payment logs' },
          { date: '21 Dec 2025', activity: 'Integrated filters, columns selection, and theme configurations' }
        ],
        requirements: {
          functionalRequirements: [
            '✅ Generic CRUD schema handling metadata',
            '✅ Dual-theme silver/gold layouts'
          ],
          nonFunctionalRequirements: [
            '⚡ Indian currency lakh grouping formatting support'
          ]
        },
        explanation: `ABC demonstrates a configurable business engine where forms, layouts, validations, and columns are derived entirely from backend database rules.`
      }
    },
    {
      id: 'CCC-SECR-BSP',
      imageSrc: CCC,
      liveUrl: 'https://ccc-secr-bsp.vercel.app/',
      name: 'CCC Crew Operations Hub',
      githubUrl: 'https://github.com/VinayVamshee/Project-CCC-SECR-BSP.git',
      description: 'An internal operations platform for crew communications, digitizing manuals, event noticing, contact search, and safety knowledge quiz tests.',
      tag: 'Enterprise Operations Platform',
      colorGlow: 'rgba(161, 0, 255, 0.08)',
      moreImages: [
        'https://i.ibb.co/1JjKDpxh/Screenshot-2025-06-11-at-00-08-46.png',
        'https://i.ibb.co/Wv66xR4N/Screenshot-2025-06-11-at-00-08-35.png',
        'https://i.ibb.co/CpZ3WvNC/Screenshot-2025-06-11-at-00-08-59.png'
      ],
      fullDetails: {
        intro: `CCC (Crew Communication & Content Center) is an internal communications hub built to manage resource access, safety guides, and real-time team logs.`,
        description: `This platform digitizes operations, replacing paper notices and WhatsApp directories with a secure, responsive portal accessible on any mobile device.`,
        features: {
          userFeatures: [
            '📚 Downloadable library manuals and documents',
            '🎥 Safety video streams and category filters',
            '📝 Timed technical quizzes with auto-scoring and shuffled inputs'
          ],
          adminFeatures: [
            '🔐 Secure admin authentication session control',
            '📤 Full content CMS for adding books, contacts, and quiz questions',
            '🔔 Push-style alert broadcasts with unseen badge counters'
          ]
        },
        techStack: {
          frontend: 'React, CSS3 (with animations), ES6',
          backend: 'Node.js, Express.js',
          database: 'MongoDB Atlas',
          auth: 'JWT Auth',
          deployment: {
            frontend: 'Vercel',
            backend: 'Render'
          }
        },
        timeline: [
          { date: 'Jan 2024', activity: 'Initial conceptualization and deployment' },
          { date: 'Feb 2025', activity: 'Added broadcasting notices and alert modules' },
          { date: 'Jun 2025', activity: 'Integrated interactive timed quiz tests' }
        ],
        requirements: {
          functionalRequirements: [
            '✅ Document flip viewer integration',
            '✅ Quiz scoreboards tracking'
          ],
          nonFunctionalRequirements: [
            '📱 Low latency directory filtering'
          ]
        },
        explanation: `CCC streamlines field communication, improving training engagement through timed MCQs and safe document repositories.`
      }
    },
    {
      id: 'GLANCE',
      imageSrc: IRWSI,
      liveUrl: 'https://vigilance-secr.vercel.app/',
      name: 'Glance – Personalized Web Launcher',
      githubUrl: 'https://github.com/VinayVamshee/IRWSI-Indian-Railway-WebsiteS-Information.git',
      description: 'A multi-user bookmark catalog and knowledge dashboard featuring 3D page-flipping previewers, customizable background skins, and admin locking rules.',
      tag: 'Personalized Web Launcher',
      colorGlow: 'rgba(0, 242, 254, 0.08)',
      moreImages: [],
      fullDetails: {
        intro: `Glance is a multi-user, full-stack bookmark launcher offering visual categories, customized themes, and 3D document flip-books.`,
        description: `It solves scattered links by organizing study, development, and team resources into neat panels with background wallpapers and an inline search console.`,
        features: {
          userFeatures: [
            '🗂️ Categorized boards for rapid access (Work, Dev, Study)',
            '🌌 Custom user-defined backgrounds (Images / Videos / Colors)',
            '📚 Word-document-style viewer with 3D flip animations and zoom'
          ],
          adminFeatures: [
            '🛑 Admin lock preventing accidental edits to curated department-wide bookmark sets',
            '🔗 Public links sharing with embedder frames'
          ]
        },
        techStack: {
          frontend: 'React, CSS3, html-flippage engine',
          backend: 'Node.js, Express.js',
          database: 'MongoDB Atlas',
          auth: 'JWT Auth',
          deployment: {
            frontend: 'Vercel',
            backend: 'Render'
          }
        },
        timeline: [
          { date: 'Mar 2024', activity: 'Developed flip-book layout engine' },
          { date: 'Apr 2024', activity: 'Completed JWT login, admin permissions lock, and final hosting' }
        ],
        requirements: {
          functionalRequirements: [
            '✅ Fast real-time bookmark indexing',
            '✅ Interactive 3D flip previewer'
          ],
          nonFunctionalRequirements: [
            '🌓 Device scale responsive grids'
          ]
        },
        explanation: `Glance acts as a unified portal, eliminating fragmented links and improving resource sharing within organizational nodes.`
      }
    },
    {
      id: 'MAGUVAS-COLLECTION',
      imageSrc: MaguvasCover,
      liveUrl: 'https://mallikas-store.vercel.app/',
      name: 'Maguva’s Collection',
      githubUrl: 'https://github.com/VinayVamshee/Mallikas-Store.git',
      description: 'A premium boutique-style e-commerce platform featuring multi-attribute product filters, secure user profiles, order tracking, and QR payments.',
      tag: 'E-Commerce SaaS',
      colorGlow: 'rgba(0, 242, 254, 0.08)',
      moreImages: [
        'https://i.ibb.co/MkVJVTrb/Screenshot-2025-06-09-at-22-37-21.png',
        'https://i.ibb.co/0RRTHvdD/Screenshot-2025-06-11-at-12-02-56.png'
      ],
      fullDetails: {
        intro: `Maguva's Collection is a boutique women's fashion store frontend and backend built with advanced categories filtering and manual QR checkout mechanisms.`,
        description: `Designed to handle boutique inventory, users can filter by size, colors, categories and view alternate previews on hover.`,
        features: {
          userFeatures: [
            '👗 Multi-category filters (sizes, apparel, pricing)',
            '🛒 Cart state with dynamic quantity limits',
            '📦 Live orders tracking and timeline'
          ],
          adminFeatures: [
            '🛠️ Admin stock management panel',
            '📉 Toggle out-of-stock items and flag variants'
          ]
        },
        techStack: {
          frontend: 'React, CSS (Bootstrap-powered custom elements)',
          backend: 'Node.js, Express.js',
          database: 'MongoDB',
          auth: 'JWT (Token)',
          deployment: {
            frontend: 'Vercel',
            backend: 'Vercel'
          }
        },
        timeline: [
          { date: 'Jun 2025', activity: 'Engineered backend order queues and integrated responsive grids' }
        ],
        requirements: {
          functionalRequirements: [
            '✅ User checkouts and payment QR code layouts',
            '✅ Stock controls'
          ],
          nonFunctionalRequirements: [
            '📱 Optimized images for mobile shopping web'
          ]
        },
        explanation: `Maguva's Collection simplifies inventory administration while presenting a clean interface for mobile shoppers.`
      }
    },
    {
      id: 'RRR-SECR',
      imageSrc: RRR,
      liveUrl: 'https://rrr-secr.vercel.app/',
      name: 'RRR - Lodging & Accommodation Console',
      githubUrl: 'https://github.com/VinayVamshee/Railway_Running_Rooms.git',
      description: 'A resource allocation engine that automates space logs, check-ins, capacity utilization indexes, and analytical exports for large operations hubs.',
      tag: 'Internal Resource Allocation Platform',
      colorGlow: 'rgba(161, 0, 255, 0.08)',
      moreImages: [
        'https://i.ibb.co/58jbrDV/Screenshot-2024-12-12-at-12-57-48-PM.png',
        'https://i.ibb.co/PjGRJR7/Screenshot-2024-12-12-at-12-58-20-PM.png'
      ],
      fullDetails: {
        intro: `The Lodging and Accommodation platform digitizes check-ins and room utilization tracking for large team operations.`,
        description: `Replacing traditional logs, it offers color-coded visual maps of rooms, bed availability, and real-time operational status.`,
        features: {
          userFeatures: [
            '📋 Real-time room booking statuses',
            '📅 History logs for stays and checkouts'
          ],
          adminFeatures: [
            '🛏️ Color-coded room occupancy grid (Red/Green)',
            '📈 Peak hour occupancy reports and analytics',
            '📤 Excel reports downloadable via ExcelJS'
          ]
        },
        techStack: {
          frontend: 'React with CSS',
          backend: 'Node.js, Express.js',
          database: 'MongoDB Atlas',
          auth: 'JWT Session authentication',
          deployment: {
            frontend: 'Vercel',
            backend: 'Vercel'
          }
        },
        timeline: [
          { date: 'May 2024', activity: 'Setup, designed interactive grid occupancy visual boards, and integrated ExcelJS' }
        ],
        requirements: {
          functionalRequirements: [
            '✅ Interactive room maps',
            '✅ Peak hours arrival telemetry'
          ],
          nonFunctionalRequirements: [
            '🌓 Stable state updates during concurrent admin logins'
          ]
        },
        explanation: `RRR minimizes errors, limits double-bookings, and delivers operational statistics to divisional managers.`
      }
    },
    {
      id: 'Helmet',
      imageSrc: Helmet,
      liveUrl: '#',
      name: 'AI Object & Asset Detection',
      githubUrl: '#',
      description: 'A deep learning computer vision application using YOLOv8, Streamlit, and OCR to identify security compliance objects and perform automatic cataloging.',
      tag: 'AI / Computer Vision',
      colorGlow: 'rgba(161, 0, 255, 0.08)',
      moreImages: [],
      isInactive: true,
      fullDetails: {
        intro: `AI Object Detection uses YOLOv8 weights to analyze video files and streams, identifying violations in real-time.`,
        description: `It flags missing assets, zooms in on details, and uses OCR (EasyOCR) to read alphanumeric serial codes.`,
        features: {
          userFeatures: [
            '📹 Upload video files to identify compliance states',
            '🔍 View OCR bounding boxes on extracted serial plates'
          ],
          adminFeatures: [
            '📊 Violations counter dashboard'
          ]
        },
        techStack: {
          frontend: 'Streamlit',
          backend: 'Python',
          database: 'None (Local Cache)',
          auth: 'None',
          deployment: {
            frontend: 'Local Server / Streamlit Cloud',
            backend: 'Local Server'
          }
        },
        timeline: [
          { date: 'Oct 2024', activity: 'Model training using custom datasets, integrated OCR engine, and built frontend' }
        ],
        requirements: {
          functionalRequirements: [
            '✅ YOLOv8 object detections',
            '✅ Plate OCR extraction'
          ],
          nonFunctionalRequirements: [
            '⚡ Sub-second response frames'
          ]
        },
        explanation: `This project is designed as an automated safety compliance solution, reducing manual inspection labor.`
      }
    }
  ]);

  const handleNavigate = (projectData) => {
    navigate(`/project/${projectData.id}`, { state: { project: projectData } });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="page-section">
      <div className="noise-overlay" />
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.h2 className="section-title" variants={cardVariants}>
          Selected Case Studies
        </motion.h2>
        <motion.p className="section-subtitle" variants={cardVariants}>
          Explore the architecture, technical challenges, and product impacts of platforms engineered for school ERPs, enterprise operations, and business operating consoles.
        </motion.p>

        <div className="projects-container">
          {websites.map((project) => (
            <motion.div 
              className="project-section-card" 
              key={project.id}
              variants={cardVariants}
              onClick={() => handleNavigate(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-glow" style={{ background: `radial-gradient(circle, ${project.colorGlow} 0%, transparent 60%)` }} />
              
              <div className="project-details-left">
                <span className="project-label">{project.tag}</span>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc-short">{project.description}</p>
                
                <div className="project-features-list">
                  <div className="project-feat">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4669 3.72684C11.7175 3.91484 11.7686 4.27197 11.5806 4.52258L6.83059 10.8559C6.73778 10.9797 6.59628 11.0565 6.44211 11.0664C6.28794 11.0763 6.13651 11.0182 6.02647 10.9082L3.52647 8.40816C3.33121 8.2129 3.33121 7.89632 3.52647 7.70106C3.72173 7.50579 4.03831 7.50579 4.23358 7.70106L6.29903 9.76651L10.6712 3.93708C10.8592 3.68647 11.2163 3.63536 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                    <span>Full Production-Grade Product Architecture</span>
                  </div>
                  <div className="project-feat">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4669 3.72684C11.7175 3.91484 11.7686 4.27197 11.5806 4.52258L6.83059 10.8559C6.73778 10.9797 6.59628 11.0565 6.44211 11.0664C6.28794 11.0763 6.13651 11.0182 6.02647 10.9082L3.52647 8.40816C3.33121 8.2129 3.33121 7.89632 3.52647 7.70106C3.72173 7.50579 4.03831 7.50579 4.23358 7.70106L6.29903 9.76651L10.6712 3.93708C10.8592 3.68647 11.2163 3.63536 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                    <span>Integrated CRUD Databases & Auth Schemas</span>
                  </div>
                </div>

                <div className="project-cta-row">
                  <button className="btn-secondary" style={{ border: 'none', background: 'transparent', padding: '0', textDecoration: 'underline' }}>
                    View Technical Case Study →
                  </button>
                </div>
              </div>

              <div className="project-mockup-right">
                <div className="browser-frame">
                  <div className="browser-header">
                    <div className="browser-dot red" />
                    <div className="browser-dot yellow" />
                    <div className="browser-dot green" />
                    <div className="browser-address">localhost:3000/app/{project.id.toLowerCase()}</div>
                  </div>
                  <div className="browser-content">
                    <img src={project.imageSrc} alt={project.name} className="browser-img" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}