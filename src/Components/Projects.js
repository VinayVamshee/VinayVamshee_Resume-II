import React, { useEffect } from 'react'
import Footer from './Footer'
import CCC from './Images/CCC-Page.png'
import IRWSI from './Images/IRWSI-Page.png'
import RRR from './Images/RRR-Page.png'
import VTS from './Images/VTS-Page.png'

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
            { threshold: 0.4 } // Adjust visibility trigger (0 = when barely visible, 1 = fully visible)
        );

        const items = document.querySelectorAll(".websites .website");
        items.forEach((item) => observer.observe(item));

        return () => {
            items.forEach((item) => observer.unobserve(item));
        };
    }, []);
    return (
        <div id='project' className='projects'>
            <div className='websites'>

                <div className='website'>
                    <div className='image'>
                        <img src={CCC} alt='...' />
                        <a href='https://ccc-secr-bsp.vercel.app/' target='_blank' rel="noreferrer" className="btn">
                            <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
                        </a>
                    </div>
                    <name>CCC SECR BSP</name>
                    <div className='links'>
                        <div className='link'>
                            <a href='https://github.com/VinayVamshee/Project-CCC-SECR-BSP.git' target='_blank' rel="noreferrer">Github Repository</a>
                        </div>
                        <p className="d-inline-flex gap-1">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseCCCSECRBSP" aria-expanded="false" aria-controls="CollapseCCCSECRBSP">
                            </button>
                        </p>
                    </div>
                    <div className="collapse" id="CollapseCCCSECRBSP">
                        A live web platform for station employees to manage books, videos, notices, and contacts, with admin controls for content management.
                    </div>
                </div>

                <div className='website'>
                    <div className='image'>
                        <img src={RRR} alt='...' />
                        <a href='https://rrr-secr.vercel.app/' target='_blank' rel="noreferrer" className="btn">
                            <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
                        </a>
                    </div>
                    <name>Railway Running Rooms</name>
                    <div className='links'>
                        <div className='link'>
                            <a href='https://github.com/VinayVamshee/Railway_Running_Rooms.git' target='_blank' rel="noreferrer">Github Repository</a>
                        </div>
                        <p className="d-inline-flex gap-1">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseRRRSECR" aria-expanded="false" aria-controls="CollapseRRRSECR">
                            </button>
                        </p>
                    </div>
                    <div className="collapse" id="CollapseRRRSECR">
                        A project that digitizes and streamlines staff room management, automating occupancy tracking and data management across multiple stations.
                    </div>
                </div>

                <div className='website'>
                    <div className='image'>
                        <img src={VTS} alt='...' />
                        <a href='https://vamsheetechnoschoolbsp.vercel.app/' target='_blank' rel="noreferrer" className="btn">
                            <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
                        </a>
                    </div>

                    <name>Vamshee Techno School</name>
                    <div className='links'>
                        <div className='link'>
                            <a href='https://github.com/VinayVamshee/Project---Techno.git' target='_blank' rel="noreferrer">Github Repository</a>
                        </div>
                        <p className="d-inline-flex gap-1">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseVamsheeTechnoSchool" aria-expanded="false" aria-controls="CollapseVamsheeTechnoSchool">
                            </button>
                        </p>
                    </div>
                    <div className="collapse" id="CollapseVamsheeTechnoSchool">
                        A project improving accessibility and functionality for <br />educational management.
                    </div>
                </div>

                <div className='website'>
                    <div className='image'>
                        <img src={IRWSI} alt='...' />
                        <a href='https://vigilance-secr.vercel.app/' target='_blank' rel="noreferrer" className="btn">
                            <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
                        </a>
                    </div>
                    <name>Government Websites</name>
                    <div className='links'>
                        <div className='link'>
                            <a href='https://github.com/VinayVamshee/IRWSI-Indian-Railway-WebsiteS-Information.git' target='_blank' rel="noreferrer">Github Repository</a>
                        </div>
                        <p className="d-inline-flex gap-1">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseGovConnect" aria-expanded="false" aria-controls="CollapseRRRSECR">
                            </button>
                        </p>
                    </div>
                    <div className="collapse" id="CollapseGovConnect">
                        GovConnect is a platform that gathers all essential government websites in one place and allows users to save their favorite websites, with multi-user support and a search feature.
                    </div>
                </div>


                <div className='website'>
                    <div className='image'>
                        <img src="https://i.ibb.co/7xm0Ls1M/Screenshot-2025-04-06-at-17-49-30.png" alt='...' />
                        <a href='https://sss-school-scholastic-system.vercel.app/' target='_blank' rel="noreferrer" className="btn">
                            <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
                        </a>
                    </div>
                    <name>SSS – School Scholastic System</name>
                    <div className='links'>
                        <div className='link'>
                            <a href='https://github.com/VinayVamshee/SSS-School-Scholastic-System.git' target='_blank' rel="noreferrer">Github Repository</a>
                        </div>
                        <p className="d-inline-flex gap-1">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseSSS" aria-expanded="false" aria-controls="CollapseSSS">
                            </button>
                        </p>
                    </div>
                    <div className="collapse" id="CollapseSSS">
                    This is a school administration software built to simplify real-world school operations. It supports student enrollment, fee tracking with receipts and reports, exam and marks management, and customizable student info fields. With interactive dashboards and a clean UI, it enhances efficiency and transparency. <p style={{fontWeight: 'bold'}}>Currently under active development.</p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}