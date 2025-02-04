import React from 'react'
import Footer from './Footer'

export default function Projects() {
    return (
        <div id='project' className='projects'>
            <div className='websites'>

                <div className='website'>
                    <div className='image'>
                        <img src='https://i.ibb.co/0MfYpWh/Screenshot-2024-01-16-at-9-33-50-AM.png' alt='...' />
                        <a href='https://www.vamsheetechnoschoolbsp.vercel.app/' target='_blank' rel="noreferrer" className="btn">
                            <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
                        </a>
                    </div>

                    <name>Vamshee Techno School</name>
                    <div className='links'>
                        <div className='link'>
                            <a href='https://github.com/VinayVamshee/Project---Techno.git'>Github Repository</a>
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
                        <img src='https://i.ibb.co/CwQJj5w/Screenshot-2024-01-16-at-10-25-53-AM.png' alt='...' />
                        <a href='https://ccc-secr-bsp.vercel.app/' target='_blank' rel="noreferrer" className="btn">
                            <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
                        </a>
                    </div>
                    <name>CCC SECR BSP</name>
                    <div className='links'>
                        <div className='link'>
                            <a href='https://github.com/VinayVamshee/Project-CCC-SECR-BSP.git'>Github Repository</a>
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
                        <img src='https://i.ibb.co/nkNM08D/Screenshot-2024-12-14-at-12-19-31-PM.png' alt='...' />
                        <a href='https://rrr-secr.vercel.app/' target='_blank' rel="noreferrer" className="btn">
                            <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
                        </a>
                    </div>
                    <name>Railway Running Rooms</name>
                    <div className='links'>
                        <div className='link'>
                            <a href='https://github.com/VinayVamshee/Railway_Running_Rooms.git'>Github Repository</a>
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
                        <img src='https://i.ibb.co/fYNRLMJW/Screenshot-2025-02-04-at-18-18-02.png' alt='...' />
                        <a href='https://vigilance-secr.vercel.app/' target='_blank' rel="noreferrer" className="btn">
                            <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
                        </a>
                    </div>
                    <name>Government Websites</name>
                    <div className='links'>
                        <div className='link'>
                            <a href='https://github.com/VinayVamshee/IRWSI-Indian-Railway-WebsiteS-Information.git'>Github Repository</a>
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

            </div>

            <Footer/>
        </div>
    )
}
