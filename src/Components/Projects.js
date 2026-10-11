import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import SSSMain from './Images/SSS.png';
import SSSClasses from './Images/SSS-Classes.png';
import SSSDev from './Images/SSS-Dev.png';
import SSSLogin from './Images/SSS-Login.png';
import SSSQP from './Images/SSS-QP.png';
import SSSQPPPreview from './Images/SSS-QPPPreview.png';
import SSSSettings from './Images/SSS-Settings.png';
import SSSStudent from './Images/SSS-Student.png';
import SSSStudentInformation from './Images/SSS-StudentInformation.png';

import ABCMain from './Images/ABC.png';
import ABCHome from './Images/ABC-Home.png';
import ABCInventory from './Images/ABC-Inventory.png';
import ABCSettings from './Images/ABC-Settings.png';
import ABCSold from './Images/ABC-Sold.png';

import CCCMain from './Images/CCC.png';
import CCCAdmin from './Images/CCC-Admin.png';
import CCCAlbum from './Images/CCC-Album.png';
import CCCBooks from './Images/CCC-Books.png';
import CCCQuiz from './Images/CCC-Quiz.png';
import CCCStaff from './Images/CCC-Staff.png';
import CCCVideos from './Images/CCC-Videos.png';

import GlanceMain from './Images/Glance.png';
import GlanceSettings from './Images/Glance-Settings.png';
import GlanceSettingsII from './Images/Glance-SettingsII.png';

import RRRMain from './Images/RRR-Page.png';
import HelmetMain from './Images/Helmet.png';
import MaguvasCover from './Images/Screenshot 2025-06-11 at 11.59.16.png';

export const projectsData = [
    {
      id: 'SSS',
      imageSrc: SSSMain,
      liveUrl: 'https://sss-school-scholastic-system.vercel.app/',
      name: 'School Scholastic System (SSS)',
      githubUrl: 'https://github.com/VinayVamshee/SSS-School-Scholastic-System.git',
      description: 'A multi-tenant, metadata-driven School ERP engineered with plan-based feature gating, granular permission sets, JWT authentication, rate limiting, and a layered server architecture spanning over 88,000 lines of code and 213 modular REST endpoints.',
      tag: 'Metadata-Driven Multi-Tenant School ERP',
      colorGlow: 'rgba(161, 0, 255, 0.08)',
      highlights: [
        'Multi-Tenant Layered SaaS',
        '88,000+ Lines of Code',
        '213 Modular REST Endpoints'
      ],
      moreImages: [
        SSSLogin,
        SSSStudent,
        SSSStudentInformation,
        SSSClasses,
        SSSQP,
        SSSQPPPreview,
        SSSSettings,
        SSSDev,
      ],
      fullDetails: {
        intro: `School Scholastic System (SSS) is an enterprise-grade multi-tenant SaaS platform built with a layered architecture spanning 88,000+ lines of code and 213 REST endpoints. Built on React, Node/Express, and MongoDB, it features plan-based feature gating, permission sets, JWT authentication, and metadata-driven dynamic forms that eliminate hardcoded workflows.`,
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
          {
            date: '16 Feb 2025',
            activity: 'Project inception with core School Information System (SIS), authentication, and foundational database architecture'
          },
          {
            date: 'Mar 2025',
            activity: 'Completed Student Management, Admissions, Academic Sessions, Fee Management, Payments, and Reporting modules'
          },
          {
            date: 'May 2025',
            activity: 'Major UI/UX redesign with responsive layouts, dashboards, analytics, themes, animations, and reusable component architecture'
          },
          {
            date: 'Jul 2025',
            activity: 'Introduced metadata-driven architecture with dynamic entities, configurable schemas, and centralized master data management'
          },
          {
            date: 'Sep 2025',
            activity: 'Implemented EAV (Entity-Attribute-Value) engine enabling dynamic forms, configurable fields, validation rules, and schema-driven CRUD operations'
          },
          {
            date: 'Nov 2025',
            activity: 'Built Question Bank, Random Question Generator, Question Paper Builder, Template Management, PDF generation, and printing workflows'
          },
          {
            date: 'Jan 2026',
            activity: 'Added Developer Platform including schema designer, metadata registry, entity mapping, API dispatch pipeline, storage mapper, and workflow engine'
          },
          {
            date: 'Mar 2026',
            activity: 'Expanded into a configurable multi-tenant SaaS platform with role-based permissions, dynamic modules, audit logs, and organization-level customization'
          },
          {
            date: 'Present',
            activity: 'Continuous development focusing on enterprise architecture, module configurability, performance optimization, developer tooling, and extensible platform capabilities'
          }
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
      imageSrc: ABCMain,
      liveUrl: '',
      name: 'ABC – Advanced Business Console',
      githubUrl: 'https://github.com/VinayVamshee/Project-ABC.git',
      description: 'A production inventory, billing, and ledger operating platform built for a live jewellery retail client. Features dynamic barcode label printing, live metal rates, flexible part-payments, and automated Excel/PDF accounting exports with zero database schema redesign.',
      tag: 'Metadata-Driven Business Operating Platform',
      colorGlow: 'rgba(0, 242, 254, 0.08)',
      highlights: [
        'Live Retail Jewellery System',
        'Barcode & Part-Payment Engine',
        'Custom Ledger & Backup Platform'
      ],
      moreImages: [
        ABCHome,
        ABCInventory,
        ABCSold,
        ABCSettings,
      ],
      fullDetails: {
        intro: `ABC (Advanced Business Console) is a production-deployed Business Operating Platform (BOP) built for a commercial jewellery business. It unifies inventory control, barcode generation, dynamic metal rates, billing, multi-mode part payments, customer ledgers, and automated data backups into a single metadata-driven system without requiring database schema redesigns.`,
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
          {
            date: '09 Nov 2025',
            activity: 'Project kickoff with modular architecture, authentication, inventory foundation, and configurable business entities'
          },
          {
            date: '22 Nov 2025',
            activity: 'Completed Inventory Management including products, categories, stock tracking, file uploads, and supplier management'
          },
          {
            date: '14 Dec 2025',
            activity: 'Implemented Purchase & Sales workflows, invoice generation, payment tracking, profit calculations, and customer management'
          },
          {
            date: '11 Jan 2026',
            activity: 'Introduced dynamic schema engine, metadata-driven entities, customizable forms, validation rules, and business configuration modules'
          },
          {
            date: '08 Feb 2026',
            activity: 'Developed advanced reporting, dashboards, analytics, search, filters, column personalization, and export utilities'
          },
          {
            date: '18 Mar 2026',
            activity: 'Built enterprise architecture with Storage Mapper, Dispatch Services, Repository layer, reusable business handlers, and centralized API pipeline'
          },
          {
            date: '27 Apr 2026',
            activity: 'Integrated role-based permissions, audit logging, theme engine, notifications, document generation, and workflow automation'
          },
          {
            date: 'Present',
            activity: 'Continuous expansion into a configurable Business Operating Platform with scalable modules, metadata-driven development, and enterprise-grade architecture'
          }
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
      imageSrc: CCCMain,
      liveUrl: 'https://ccc-secr-bsp.vercel.app/',
      name: 'CCC – Crew Communication Center',
      githubUrl: 'https://github.com/VinayVamshee/Project-CCC-SECR-BSP.git',
      description: 'CCC (Crew Communication & Content Center) is a digital operations portal developed for South East Central Railway to centralize crew communications, technical resources, departmental announcements, learning material, knowledge assessments, and staff information into a single platform used by railway employees.',
      tag: 'Railway Operations & Knowledge Portal',
      colorGlow: 'rgba(161, 0, 255, 0.08)',
      highlights: [
        'Railway Staff Portal',
        'Learning Management',
        'Quiz & Analytics'
      ],
      moreImages: [
        CCCStaff,
        CCCBooks,
        CCCVideos,
        CCCAlbum,
        CCCQuiz,
        CCCAdmin,
      ],
      fullDetails: {
        intro: `CCC (Crew Communication & Content Center) is a digital operations portal developed for South East Central Railway to centralize crew communications, technical resources, departmental announcements, learning material, knowledge assessments, and staff information into a single platform used by railway employees.`,
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
            backend: 'Cloud Hosting'
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
      imageSrc: GlanceMain,
      liveUrl: 'https://vigilance-secr.vercel.app/',
      name: 'Glance',
      githubUrl: 'https://github.com/VinayVamshee/IRWSI-Indian-Railway-WebsiteS-Information.git',
      description: 'Glance is a personalized digital workspace that centralizes frequently used websites, documents, PDFs, productivity tools, notes, and organizational resources into a customizable dashboard featuring rich previews, flipbook readers, personalized themes, and secure multi-user management.',
      tag: 'Personal Productivity Workspace',
      colorGlow: 'rgba(0, 242, 254, 0.08)',
      highlights: [
        'Personalized Workspace',
        'Smart Resource Library',
        'Custom Dashboards'
      ],
      moreImages: [
        GlanceSettings,
        GlanceSettingsII
      ],
      fullDetails: {
        intro: `Glance is a personalized digital workspace that centralizes frequently used websites, documents, PDFs, productivity tools, notes, and organizational resources into a customizable dashboard featuring rich previews, flipbook readers, personalized themes, and secure multi-user management.`,
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
            backend: 'Cloud Hosting'
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
      description: 'A boutique-focused digital commerce platform designed for fashion retailers, offering catalog management, product variants, customer accounts, QR-based ordering, inventory management, and responsive shopping experiences optimized for mobile users.',
      tag: 'Boutique Commerce Platform',
      colorGlow: 'rgba(0, 242, 254, 0.08)',
      highlights: [
        'Boutique Commerce',
        'Inventory Management',
        'Mobile Shopping'
      ],
      moreImages: [],
      fullDetails: {
        intro: `Maguva's Collection is a boutique-focused digital commerce platform designed for fashion retailers, offering catalog management, product variants, customer accounts, QR-based ordering, inventory management, and responsive shopping experiences optimized for mobile users.`,
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
      imageSrc: RRRMain,
      liveUrl: '#',
      name: 'RRR – Railway Running Room',
      githubUrl: 'https://github.com/VinayVamshee/Railway_Running_Rooms.git',
      description: 'An operational accommodation platform engineered for a railway division that completely replaced legacy paper registers during its active production run, recording over 3,000+ real crew entries before being retired out of commission.',
      tag: 'Railway Running Room System (Retired Production System)',
      colorGlow: 'rgba(161, 0, 255, 0.08)',
      highlights: [
        '3,000+ Operational Entries Recorded',
        'Digitized Paper Register Logs',
        'Production System (Retired)'
      ],
      moreImages: [],
      isInactive: true,
      fullDetails: {
        intro: `RRR was deployed as an operational accommodation platform for a railway division to digitize crew check-ins, room allocation, and occupancy tracking. It successfully replaced physical paper registers and recorded over 3,000+ live operational entries during its active deployment before being retired out of commission.`,
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
      imageSrc: HelmetMain,
      liveUrl: '#',
      name: 'Helmet & License Plate Detection (Patent 202541127889)',
      githubUrl: '#',
      description: 'Co-inventor of Indian Patent Application 202541127889 (Published Jan 2026). Developed the architecture, model pipeline, and code using YOLOv8 and EasyOCR to automate protective safety equipment detection and license plate text extraction in real time.',
      tag: 'Published Indian Patent • Computer Vision & OCR',
      colorGlow: 'rgba(161, 0, 255, 0.08)',
      highlights: [
        'Official Indian Patent (202541127889)',
        'YOLOv8 & EasyOCR Pipeline',
        'Real-Time Compliance Automation'
      ],
      moreImages: [],
      isInactive: true,
      fullDetails: {
        intro: `Co-invented and engineered a published Indian Patent system (Application 202541127889, Published Jan 2026) using YOLOv8 and EasyOCR to automate industrial safety compliance, detecting personal protective equipment (helmets) and extracting vehicle plate numbers in real time.`,
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
];

export default function Projects() {
  const navigate = useNavigate();
  const [websites] = useState(projectsData);

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
          A collection of enterprise-grade products, operational platforms, and configurable business systems designed to solve real-world workflow, data management, and organizational challenges. These case studies highlight not just implementation, but product architecture, scalability, and system design decisions.
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
                  {project.highlights && project.highlights.map((highlight, index) => (
                    <div className="project-feat" key={index}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4669 3.72684C11.7175 3.91484 11.7686 4.27197 11.5806 4.52258L6.83059 10.8559C6.73778 10.9797 6.59628 11.0565 6.44211 11.0664C6.28794 11.0763 6.13651 11.0182 6.02647 10.9082L3.52647 8.40816C3.33121 8.2129 3.33121 7.89632 3.52647 7.70106C3.72173 7.50579 4.03831 7.50579 4.23358 7.70106L6.29903 9.76651L10.6712 3.93708C10.8592 3.68647 11.2163 3.63536 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="project-cta-row">
                  <button className="btn-secondary" style={{ border: 'none', background: 'transparent', padding: '0', textDecoration: 'underline' }}>
                    Explore Product Architecture →
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