import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'
import CCC from './Images/CCC-Page.png'
import IRWSI from './Images/IRWSI-Page.png'
import RRR from './Images/RRR-Page.png'
import VTS from './Images/VTS-Page.png'
import Helmet from './Images/Helmet.png'

export default function Projects() {
    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show"); // Remove if you want elements to re-animate on scroll
                    }
                });
            },
            { threshold: 0.2 } // Adjust visibility trigger (0 = when barely visible, 1 = fully visible)
        );

        const items = document.querySelectorAll(".websites .website");
        items.forEach((item) => observer.observe(item));

        return () => {
            items.forEach((item) => observer.unobserve(item));
        };
    }, []);

    const [websites] = useState([
        {
            id: 'CCC-SECR-BSP',
            imageSrc: CCC,
            liveUrl: 'https://ccc-secr-bsp.vercel.app/',
            name: 'CCC SECR BSP',
            githubUrl: 'https://github.com/VinayVamshee/Project-CCC-SECR-BSP.git',
            description: 'A live web platform for station employees to manage books, videos, notices, and contacts, with admin controls for content management.',
            moreImages: [
                'https://i.ibb.co/1JjKDpxh/Screenshot-2025-06-11-at-00-08-46.png',
                'https://i.ibb.co/Wv66xR4N/Screenshot-2025-06-11-at-00-08-35.png',
                'https://i.ibb.co/CpZ3WvNC/Screenshot-2025-06-11-at-00-08-59.png',
                'https://i.ibb.co/6cdYFhgb/Screenshot-2025-06-11-at-00-09-09.png'
            ],
            fullDetails: {
                intro: `CCC-SECR-BSP is a comprehensive web platform built for the employees of Bilaspur Railway Station. It centralizes key resources like books, technical and safety videos, and a staff contact directory. The platform facilitates smooth communication through a notice board and features a gallery to highlight station events. Designed with user-friendly animations and theme switching, CCC-SECR-BSP enhances the daily work experience for railway staff. The project supports admin management for all content and user feedback, including Excel export of the contact directory.`,

                description: `CCC-SECR-BSP (Crew Communication & Content Center) is an internal web platform designed for railway staff working at Bilaspur Station. It provides a centralized, digital-first environment where information can be accessed and managed efficiently.`,

                features: {
                    userFeatures: [
                        '📚 Station Library with downloadable books and categorized manuals',
                        '🎥 Safety & Technical Videos with embedded players and category filters',
                        '📇 Station Contact Directory with full search and Excel download',
                        '📌 Admin-controlled Notice Board with timestamps and sorting',
                        '🖼️ Event Gallery with carousel/grid view and auto-sorting',
                        '🌓 Light/Dark Theme toggle with local storage persistence',
                        '🔔 In-app Notifications for new notices and alerts'
                    ],
                    adminFeatures: [
                        '🔐 Secure Admin Authentication with session management',
                        '🛠️ Full CMS (Create, Read, Update, Delete) for books, videos, contacts, gallery, and notices',
                        '📤 Excel Export of contact directory (.xlsx format)',
                        '📝 Feedback Management to handle staff suggestions',
                        '📢 Push Notifications system with badge counters (Feb 2025 update)'
                    ]
                },

                techStack: {
                    frontend: 'React, CSS3 (with animations), JavaScript',
                    backend: 'Node.js, Express.js',
                    database: 'MongoDB Atlas',
                    auth: 'JWT-based login for Admin',
                    deployment: {
                        frontend: 'Vercel',
                        backend: 'Vercel',
                    },
                    versionControl: 'Git + GitHub'
                },

                timeline: [
                    { date: '9 Jan 2024', activity: 'Project start – setup frontend and backend' },
                    { date: '16 Jan 2024', activity: 'Initial deployment of core platform' },
                    { date: '1 Feb 2025', activity: 'Added admin/user notification feature' }
                ],

                requirements: {
                    functionalRequirements: [
                        '📘 Book Library module with upload, preview, and categorized display',
                        '🎬 Video module with upload, embed view, and category filters',
                        '📇 Contact Directory with full-text search and downloadable Excel export',
                        '📝 Notice Board with admin-controlled content and timestamps',
                        '🖼️ Gallery module supporting image uploads and modal view',
                        '🔐 Admin login system with session-based access control',
                        '📤 CMS support for managing all content types',
                        '🔔 Notification system with badge counter and dismiss timer',
                        '📣 Feedback module for user suggestions'
                    ],
                    nonFunctionalRequirements: [
                        '🌓 Responsive UI with theme toggle (light/dark)',
                        '⚡ Smooth animations for all UI transitions',
                        '📱 Mobile and tablet responsive layout',
                        '📎 Upload support for images, PDFs, and documents URLs',
                        '✅ Fallback handling for empty or missing data',
                        '🚀 Hosting on Vercel (frontend) and Vercel (backend)',
                        '🔗 MongoDB Atlas integration with secure connection',
                        '🧪 Manual testing across devices and browsers',
                        '🧾 Environment variable setup for production security'
                    ]
                },

                explanation: `CCC-SECR-BSP digitizes internal communication at Bilaspur Station, replacing physical files and fragmented WhatsApp-based updates. Employees can download training books, stream approved videos, find any coworker’s contact, and receive real-time admin notices—all in one place.  
From the admin side, all modules are managed via a secure dashboard, including content control, Excel exports, and in-app feedback.  
The project was built in a week, later upgraded with real-time alerts. CCC now acts as the central communication hub for station operations.`
            }
        },
        {
            id: 'RRR-SECR',
            imageSrc: RRR,
            liveUrl: 'https://rrr-secr.vercel.app/',
            name: 'Railway Running Rooms',
            githubUrl: 'https://github.com/VinayVamshee/Railway_Running_Rooms.git',
            description: 'A project that digitizes and streamlines staff room management, automating occupancy tracking and data management across multiple stations.',
            moreImages: [
                'https://i.ibb.co/58jbrDV/Screenshot-2024-12-12-at-12-57-48-PM.png',
                'https://i.ibb.co/PjGRJR7/Screenshot-2024-12-12-at-12-58-20-PM.png',
                'https://i.ibb.co/pbfLGC0/Screenshot-2024-12-12-at-12-58-52-PM.png',
            ],
            fullDetails: {
                features: {
                    userFeatures: [
                        "🚶‍♂️ Staff login (optional depending on implementation)",
                        "📋 View room availability and booking status (if implemented)",
                        "📅 Access historical data on stays and arrivals (read-only)"
                    ],
                    adminFeatures: [
                        "➕ Add, edit, and delete railway stations",
                        "🏢 Manage buildings within each station",
                        "🛏️ Configure rooms and their capacity/status",
                        "🕒 Track staff arrivals and departures in real time",
                        "🟩🟥 View room occupancy status with a clear visual color code",
                        "📤 Download detailed Excel reports of occupancy and arrivals",
                        "📈 Analyze daily and monthly peak hour statistics for better planning",
                        "👥 Multi-user access to handle different stations and users"
                    ]
                },
                requirements: {
                    functionalRequirements: [
                        "✅ Create admin login system with authentication",
                        "🏢 Add/manage multiple railway stations",
                        "🏬 Manage buildings within stations",
                        "🛏️ Add and configure rooms with occupancy status",
                        "🕒 Track staff arrivals and departures",
                        "🖼️ Visual room occupancy map with color coding (red=occupied, green=available)",
                        "📊 Generate downloadable Excel reports of room occupancy and arrival data",
                        "📈 Track and display peak daily/monthly arrival hours"
                    ],
                    nonFunctionalRequirements: [
                        "📱 Responsive UI with theme support (pending)",
                        "🚀 Deploy frontend and backend on Vercel/Vercel",
                        "🔐 Secure login with JWT or sessions",
                        "📦 Excel report generation using ExcelJS"
                    ],
                    optionalFeatures: [
                        "👤 Optional: Staff user login and room booking interface",
                        "🔔 Optional: Notifications for room status changes"
                    ]
                },
                techStack: {
                    frontend: "React with CSS (Bootstrap or Tailwind)",
                    backend: "Node.js with Express.js",
                    database: "MongoDB (Atlas free tier)",
                    auth: "JWT-based or session-based login",
                    deployment: {
                        frontend: "Vercel",
                        backend: "Vercel"
                    },
                    versionControl: "Git & GitHub"
                },
                timeline: [
                    { date: "5 May 2024", activity: "🎨 Frontend UI design and backend server setup" },
                    { date: "6 May 2024", activity: "🧱 Backend models and API routes for stations, buildings" },
                    { date: "7 May 2024", activity: "🛏️ Implement room occupancy logic and admin controls" },
                    { date: "8 May 2024", activity: "📊 Excel report generation and peak hour analytics" },
                    { date: "9 May 2024", activity: "🧪 Testing, bug fixes, UI polish, and deployment" }
                ],
                explanation: `
            The RRR system was built to replace the manual, paper-based process traditionally used for managing staff accommodations in railway divisions, which was time-consuming and prone to errors. By providing a digital, centralized system, RRR streamlines tracking staff room occupancy and staff arrivals/departures.

            One of the project's standout features is the visual occupancy map, where room statuses are clearly marked by color, enabling quick assessment by station operators. This feature reduces the time required to allocate rooms and helps avoid double-bookings or errors in manual logs.

            The admin panel’s flexibility allows for multiple stations and buildings to be managed from a single interface, making the tool useful not only for Bilaspur but also scalable to other divisions. The ability to download data in Excel format supports offline record-keeping and auditing, while the peak arrival tracking gives management valuable operational insights to improve resource planning.

            Overall, the project significantly reduces administrative overhead, improves accuracy in accommodation management, and provides actionable data analytics to railway authorities.
        `
            }
        },
        {
            id: 'Vamshee Techno School',
            imageSrc: VTS,
            liveUrl: 'https://vamsheetechnoschoolbsp.vercel.app/',
            name: 'Vamshee Techno School',
            githubUrl: 'https://github.com/VinayVamshee/Project---Techno.git',
            description: 'A clean and responsive school website to showcase events, academics, and public notices with admin management.',
            moreImages: [
                'https://i.ibb.co/99tLzDm1/Screenshot-2025-06-11-at-00-10-47.png',
                'https://i.ibb.co/jNdycKD/Screenshot-2025-06-11-at-00-10-20.png',
            ],
            fullDetails: {
                intro: `Vamshee Techno School (VTS) is a public-facing digital platform designed to represent a school's values, academic resources, and celebration of events. Built with a clean UI, responsive layout, and smooth transitions, it allows students, parents, and visitors to easily access essential school-related content like book lists, timetables, notices, and galleries.`,

                description: `VTS serves as an informative and interactive public website for the school. It’s not a management system, but a digital window into the school's environment—highlighting teaching practices, academic structure, and cultural celebrations.`,

                features: {
                    userFeatures: [
                        '🏫 Homepage introducing the school’s vision and education style',
                        '📅 Academic section with timetables, book lists, and calendars',
                        '📌 Notice board with latest updates for students and parents',
                        '🖼️ Events & Gallery showcasing school events, photos, and videos',
                        '🌓 Theme switcher (Light/Dark) with smooth transitions',
                        '📱 Mobile-friendly design with responsive layout'
                    ],
                    adminFeatures: [
                        '🔐 Admin panel with secure login',
                        '🛠️ CMS for uploading and managing notices, gallery, and academic data',
                        '📤 Editable fee structure and document links',
                        '📸 Media upload system for gallery (images/videos)'
                    ]
                },

                techStack: {
                    frontend: 'React, CSS3, JavaScript',
                    backend: 'NodeJS, ExpressJS',
                    database: 'MongoDB Atlas',
                    auth: 'JWT-based or session-based login',
                    deployment: {
                        frontend: 'Vercel',
                        backend: 'Vercel',
                    },
                    versionControl: 'Git + GitHub'
                },

                timeline: [
                    { date: '10th Dec 2023', activity: 'Project Started – Initial UI and homepage layout' },
                    { date: '14th Dec 2023', activity: 'Developed events gallery and visuals for celebrations' },
                    { date: '18th Dec 2023', activity: 'Academic section: books, timetable, fee structure integrated' },
                    { date: '22nd Dec 2023', activity: 'Admin dashboard built for real-time content updates' },
                    { date: '24th Dec 2023', activity: 'Implemented UI animations and theme switcher' },
                    { date: '26th Dec 2023', activity: 'Project deployed and live to public' }
                ],

                requirements: {
                    functionalRequirements: [
                        '🏫 Display homepage with mission, values, and welcome section',
                        '📅 Dynamic academic resources with admin-editable entries',
                        '📌 Notices board with date-wise updates',
                        '🖼️ Gallery module with image/video support and titles',
                        '🛠️ Admin login and content management system',
                        '🌓 Toggle for dark/light mode with local preference save'
                    ],
                    nonFunctionalRequirements: [
                        '📱 Fully responsive layout across devices',
                        '⚡ Fast-loading pages with clean navigation',
                        '🎨 Smooth animations for all UI elements',
                        '🌐 Hosted on Vercel',
                        '🔒 Secure JWT authentication for admin routes',
                        '🔗 SEO-friendly metadata and dynamic image previews'
                    ]
                },

                explanation: `VTS was created as a modern school presentation website—where visitors can understand the school’s ethos and explore important student-related resources. It merges clarity and visual richness, especially in the Events & Gallery section that builds school credibility by displaying real pictures and videos of activities.  
        The academic section provides downloadable resources, timetables, and fee structures, helping reduce confusion for parents.  
        Admins can log in to update any document, notice, or gallery post at any time. With smooth transitions, theme toggle, and clear UI design, VTS stands as a polished digital identity for the school.`
            }
        },
        {
            id: 'Gov-Connect',
            imageSrc: IRWSI,
            liveUrl: 'https://vigilance-secr.vercel.app/',
            name: 'Government Websites',
            githubUrl: 'https://github.com/VinayVamshee/IRWSI-Indian-Railway-WebsiteS-Information.git',
            description: 'GovConnect is a platform that gathers all essential government websites in one place and allows users to save their favorite websites, with multi-user support and a search feature.',
            fullDetails: {
                features: {
                    userFeatures: [
                        "🔐 Multi-user login system",
                        "🗂️ Categorized bookmarks for organized access",
                        "🎨 Background customization (color/image/video)",
                        "🔎 Smooth, animated real-time search",
                        "🔍 Integrated Google search engine",
                        "📚 Word-document-style viewer for Drive links (flip-page, zoom, theme, search)",
                        "🔗 Copy/share public link for any page"
                    ],
                    adminFeatures: [
                        "🛑 Admin Lock to restrict editing/deleting of specific user profiles",
                        "📦 Admin-curated, pre-filled user profiles for curated resource access",
                        "📄 IRWSI FlipView: Custom immersive viewer for Google Docs",
                        "🎧 Page-flipping sound effects, zoom, and search within docs",
                        "🌐 Branded link viewing within IRWSI — avoids opening Google Drive"
                    ]
                },
                requirements: {
                    functionalRequirements: [
                        "✅ Multi-user login & secure auth (JWT)",
                        "✅ Bookmark management (CRUD)",
                        "✅ Bookmark categories",
                        "✅ Real-time animated search",
                        "✅ Google search integration",
                        "✅ Custom background (color/image/video)",
                        "✅ Admin lock mechanism",
                        "✅ Create & share read-only public profiles",
                        "✅ IRWSI FlipView for document reading",
                        "✅ Flip effect, sound, zoom, and search in viewer",
                        "✅ Embedded document display in public link"
                    ],
                    nonFunctionalRequirements: [
                        "✅ Smooth, responsive, and fast UI",
                        "✅ Secure role-based access control",
                        "✅ Scalable backend architecture",
                        "✅ Clean public link handling and embedding",
                        "✅ Consistent user experience across devices",
                        "✅ Quick load times and optimized document rendering"
                    ]
                },
                techStack: {
                    frontend: "React with Tailwind or CSS (responsive UI, animations)",
                    backend: "Node.js with Express.js",
                    database: "MongoDB (Atlas)",
                    auth: "JWT-based login & role-based access",
                    deployment: {
                        frontend: "Vercel",
                        backend: "Render or Railway"
                    },
                    specialTools: [
                        "🗃️ html-flippage for document flip effect",
                        "🎨 Custom theme engine for backgrounds",
                        "🔗 Google Drive integration with embedded viewers"
                    ]
                },
                timeline: [
                    { date: "March 2024", activity: "🛠️ Initial concept and reusable Glance-based foundation" },
                    { date: "Early April 2024", activity: "🔐 Multi-user auth and bookmark CRUD system" },
                    { date: "Mid April 2024", activity: "📄 IRWSI FlipView with embedded flipping document reader" },
                    { date: "Late April 2024", activity: "🎨 Background customization, search, and admin lock integration" },
                    { date: "1 May 2024", activity: "🚀 Final polish and deployment to Vercel" }
                ],
                explanation: `
            The IRWSI (Indian Railway WebsiteS Information) platform was built to help departments, especially within government or large institutions like the Indian Railways, organize and share resources, websites, and documents more effectively.

            While similar to Glance in functionality, IRWSI introduces a few powerful enhancements — such as admin-locked profiles, a specialized document reader, and immersive page flipping for Drive-hosted documents. This prevents accidental edits and elevates the document viewing experience for the user.

            The platform is ideal for internal teams curating training material, policies, or external resources, with clean sharing and strong content control. Through admin curation, branding consistency, and modern visuals, IRWSI ensures utility and reliability while delivering an engaging UX.

            Features like flip animation, zoom/search in docs, public sharing, and admin-lock protection make IRWSI not just a bookmark manager — but a presentation-ready knowledge platform.
        `
            }
        },
        {
            id: 'SSS',
            imageSrc: "https://i.ibb.co/7xm0Ls1M/Screenshot-2025-04-06-at-17-49-30.png",
            liveUrl: 'https://sss-school-scholastic-system.vercel.app/',
            name: 'SSS – School Scholastic System',
            githubUrl: 'https://github.com/VinayVamshee/SSS-School-Scholastic-System.git',
            description: (
                "School Scholastic System (SSS)is a full-stack school management platform built using the MERN stack. It handles everything from student enrollment and fee collection to marks entry and academic configuration. The platform includes a responsive UI, theme switching, list/grid views, and admin-level control over all academic data. With real-time analytics, customizable student info, receipt downloads, and report card generation (in progress), SSS provides a modern, centralized solution for schools looking to streamline operations. Currently under active development."
            ),
            moreImages: [
                "https://i.ibb.co/TBkZPkRm/Screenshot-2025-06-11-at-00-11-23.png",
                "https://i.ibb.co/tMcRMGdW/Screenshot-2025-06-11-at-00-11-35.png",
                "https://i.ibb.co/270QDDZM/Screenshot-2025-06-11-at-00-12-17.png",
                "https://i.ibb.co/Z6nQfT1M/Screenshot-2025-06-11-at-00-12-39.png",
                "https://i.ibb.co/1Y134J5H/Screenshot-2025-06-11-at-00-13-01.png"
            ],
            isInactive: false,
            fullDetails: {
                features: {
                    userFeatures: [
                        "👨‍🎓 Student enrollment with full details (name, Aadhar, class, guardian info, photo, etc.)",
                        "✏️ Editable student profile after enrollment",
                        "📥 Downloadable fee receipts",
                        "🖥️ Clean, responsive UI with list/grid toggle",
                        "📄 View report cards (in progress)"
                    ],
                    adminFeatures: [
                        "🛠️ Full admin control over students, subjects, marks, fees, and settings",
                        "⚙️ Master Data setup: school name, logo, contact, etc.",
                        "📈 Manage student promotions, dropout tracking, and TC generation",
                        "💰 Year-wise fee structure configuration",
                        "📊 Excel/PDF exports for payment history and class data",
                        "📚 Assign subjects to classes and exams",
                        "📝 Enter marks per subject and generate report cards (in progress)",
                        "🔍 Analytics for student count, fee status, and class distributions",
                        "🪪 ID Card formatting (planned)"
                    ]
                },
                requirements: {
                    functionalRequirements: [
                        "✅ Enroll students with all required data",
                        "✏️ Edit student information post admission",
                        "💵 Track fee payment and generate receipts",
                        "📚 Configure subjects, classes, exams, and marks entry",
                        "📊 Generate analytics for fee and student data",
                        "🔁 Promote students between academic years",
                        "📤 Download Excel reports for payments and marks"
                    ],
                    nonFunctionalRequirements: [
                        "📱 Responsive and fast UI for both desktop and mobile",
                        "🎨 Multiple theme support (dark/light, accent color options)",
                        "🔐 Secure admin login with JWT",
                        "📄 Export features using ExcelJS/PDFKit",
                        "☁️ Hosted frontend and backend on Vercel"
                    ]
                },
                techStack: {
                    frontend: "React with Tailwind CSS + Bootstrap for components",
                    backend: "Node.js with Express.js",
                    database: "MongoDB",
                    auth: "JWT (JSON Web Token)",
                    deployment: {
                        frontend: "Vercel",
                        backend: "Vercel"
                    },
                    versionControl: "Git & GitHub"
                },
                timeline: [
                    { date: "16 Feb 2025", activity: "🗓️ Initial planning and project kickoff" },
                    { date: "17–20 Feb", activity: "📦 Database schema, basic UI, student enrollment" },
                    { date: "21–23 Feb", activity: "🔗 Core backend APIs, frontend integration, initial deployment" },
                    { date: "24 Feb–20 Mar", activity: "🔧 Feedback-based fixes and polish" },
                    { date: "21–29 Mar", activity: "🎨 Major redesign with themes and UI animations" },
                    { date: "30 Mar 2025", activity: "🚀 Visual Upgrade Deployment with improved responsiveness" },
                    { date: "Apr–Ongoing", activity: "🧩 Feature additions: report cards, analytics, etc." }
                ],
                explanation: `
        This is a feature-rich, highly customizable school management platform. It supports every phase of the academic process, from admission to promotion. The design includes theme switching, grid/list view toggles, and animations for a modern user experience. Admins can configure everything from master data (school name/logo) to academic settings like subjects, exams, fee structures, and payment tracking. Excel and PDF tools allow for downloadable receipts, reports, and history. The backend supports advanced academic logic like setting multiple exams per class, associating subjects with those exams, and managing year-end promotions. Dropout students are tracked, and TCs are auto-generated. With its clean UI and robust backend, SSS is ideal for modernizing school operations with full administrative control.
    `
            }
        },
        {
            id: 'Helmet',
            imageSrc: Helmet,
            liveUrl: '#', // Add your deployed URL here
            name: 'Helmet Detection System',
            githubUrl: '#', // Add your GitHub URL here
            description: (
                <>
                    This project detects bike riders, helmets, and number plates using a YOLOv8 model integrated into a Streamlit web app. It identifies whether a rider is wearing a helmet or not and performs OCR on detected number plates. Ideal for traffic monitoring and safety enforcement systems.
                    <p style={{ fontWeight: 'bold' }}>Built using YOLOv8, Streamlit, and EasyOCR.</p>
                </>
            ),
            isInactive: true // Example of how to handle disabled links
        }
    ]);

    const navigate = useNavigate();

    const handleNavigate = (websiteData) => {
        // Navigate to the dynamic route and pass the entire object as state
        navigate(`/project/${websiteData.id}`, { state: { project: websiteData } });
    };

    return (
        <div id='project' className='projects'>
            <div className='websites'>
                {websites.map(website => (
                    <div
                        className='website'
                        key={website.id}
                        onClick={(e) => {
                            // This check prevents navigation when clicking on links or buttons inside the card
                            if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON' && e.target.parentElement.tagName !== 'A') {
                                handleNavigate(website);
                            }
                        }}>
                        <div className='image'>
                            <img src={website.imageSrc} alt={website.name} />
                            <a href={website.liveUrl} target='_blank' rel="noreferrer" className={`btn ${website.isInactive ? 'disabled' : ''}`}>
                                <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='Live Preview' />
                            </a>
                        </div>
                        <name>{website.name}</name>
                        <div className='links'>
                            <div className='link'>
                                <a href={website.githubUrl} target='_blank' rel="noreferrer" className={website.isInactive ? 'disabled' : ''}>Github Repository</a>
                            </div>
                            <p className="d-inline-flex gap-1">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target={`#Collapse${website.id}`} aria-expanded="false" aria-controls={`Collapse${website.id}`}>
                                </button>
                            </p>
                        </div>
                        <div className="collapse" id={`Collapse${website.id}`}>
                            {website.description}
                        </div>
                    </div>
                ))}
            </div>

            {/* <Footer /> */}
        </div>
    )
}