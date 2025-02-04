import React, { useState } from 'react'
import vinayvamsheeResume from './Vinay Vamshee Resume.pdf'
import vinayvamshee from './Screenshot 2024-12-15 at 9.28.44 PM.png'
import Footer from './Footer';


export default function Home() {
    const [rotation, setRotation] = useState(0);
    const [timer, setTimer] = useState(null); // For storing timeout ID

    const handleMouseMove = (e) => {
        // Clear the previous timer whenever the mouse moves
        if (timer) {
            clearTimeout(timer);
        }

        const { clientX, clientY } = e;
        const imageCenter = e.currentTarget.getBoundingClientRect();
        const offsetX = clientX - imageCenter.left - imageCenter.width / 2;
        const offsetY = clientY - imageCenter.top - imageCenter.height / 2;

        // Calculate the angle between the mouse position and the center of the image
        let angle = Math.atan2(offsetY, offsetX) * (180 / Math.PI);

        angle = -angle;

        // Limit the rotation angle range (e.g., between -15deg and 15deg)
        const limitedAngle = Math.max(-30, Math.min(30, angle));

        // Apply the limited angle
        setRotation(limitedAngle);

        const newTimer = setTimeout(() => {
            setRotation(0); // Reset rotation to 0 degrees
        }, 3000); // Reset after 3 seconds of no movement

        setTimer(newTimer);
    };


    return (
        <div className='HomePage'>
            <div id="home" className='home'>

                <div className='intro'>
                    <name>
                        <span>I</span>
                        <span>'</span>
                        <span>m</span>
                        <span>&nbsp; </span>
                        <div className='Name'>
                            <span>V</span>
                            <span>i</span>
                            <span>n</span>
                            <span>a</span>
                            <span>y</span>
                            <span>&nbsp; </span>
                            <span>V</span>
                            <span>a</span>
                            <span>m</span>
                            <span>s</span>
                            <span>h</span>
                            <span>e</span>
                            <span>e</span>
                            <span>.</span>
                        </div>
                    </name>
                    <designation>Full Stack Developer</designation>
                    <div className='devtools'>
                        <img style={{ animationDelay: '0.1s' }} src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='...' />
                        <img style={{ animationDelay: '0.3s' }} src='https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' alt='...' />
                        <img style={{ animationDelay: '0.5s' }} src='https://www.manektech.com/storage/developer/1646733543.webp' alt='...' />
                        <img style={{ animationDelay: '0.7s' }} src='https://i.pinimg.com/originals/b2/31/7e/b2317e8174e5fcef57c74c662f57d155.png' alt='...' />
                    </div>

                    <div className='info'>
                        <a href={vinayvamsheeResume} download="Vinay_Vamshee_CV.pdf" className='btn downloadCV'>Download CV<img src='https://static.vecteezy.com/system/resources/previews/019/879/209/non_2x/download-button-on-transparent-background-free-png.png' alt='...' /></a>
                        <div className='contact'>
                            <a href="tel:+91752397404">Call Me</a>
                            <a href="mailto:vinayvamshee2183@gmail.com">Mail Me</a>
                        </div>
                    </div>
                </div>
                <div className='profilePic' onMouseMove={handleMouseMove}>
                    <img src={vinayvamshee} alt='...' style={{
                        transform: `rotate(${rotation}deg)`, /* Apply the limited rotation */
                        transition: 'transform 0.6s ease-in-out', /* Smooth rotation transition */
                    }}
                    />
                </div>

            </div>

            <div className='social'>
                <a href='https://leetcode.com/u/VinayVamshee/' target='_blank' rel="noreferrer" className='contact'>
                    LeetCode
                    <img src='https://miro.medium.com/v2/resize:fit:512/1*ymdLUYayjisO2uU47lOI0A.png' alt='...' />
                </a>
                <a href='https://github.com/VinayVamshee' target='_blank' rel="noreferrer" className='contact'>
                    Github
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='...' />
                </a>
                <a href='https://in.linkedin.com/in/pechetti-vinay-vamshee-251245231' target='_blank' rel="noreferrer" className='contact'>
                    LinkedIn
                    <img src='https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png' alt='...' />
                </a>
                <a href='https://www.instagram.com/vinayvamshee/?igsh=cnJrM3g0Z3c1OXZ4' target='_blank' rel="noreferrer" className='contact'>
                    Instagram
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png' alt='...' />
                </a>
                <a href='https://www.facebook.com/VinayVamshee/' target='_blank' rel="noreferrer" className='contact'>
                    Facebook
                    <img src='https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=210' alt='...' />
                </a>
            </div>
            <div className='foot'>
            <Footer/>
            </div>
            
        </div>
    )
}
