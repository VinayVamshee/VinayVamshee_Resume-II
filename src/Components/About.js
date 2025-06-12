import React, { useEffect } from 'react'
// import Footer from './Footer'
import Brilliant from './Images/Brilliant-Image.jpg'
import Vtop from './Images/Vtop-Image.png'

export default function About() {
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

        const items = document.querySelectorAll(".skills ul li", ".education ul li");
        items.forEach((item) => observer.observe(item));

        return () => {
            items.forEach((item) => observer.unobserve(item));
        };
    }, []);

    return (
        <div id='about' className='about'>

            <section className='description'>
    <h2 className='heading'>Who I Am and What I Do</h2>
    <p>
        Hi! I'm <strong>Pechetti Vinay Vamshee</strong>, a Computer Science Engineering graduate from <strong>VIT Vellore</strong>, driven by a deep passion for software development and impactful digital solutions.
    </p>
    <p>
        I specialize in full-stack development using the <strong>MERN stack</strong> and have a strong foundation in <strong>Java</strong>, <strong>Data Structures & Algorithms</strong>, and <strong>Object-Oriented Programming</strong>.
    </p>
    <p>
        My work includes real-world applications currently used by Indian Railways and educational institutions. One of my deployed platforms receives over <strong>100 daily users</strong> and garners 5,000–10,000 monthly visits. I also built <em>Glance</em>, a dynamic, personalized bookmark manager designed as a better alternative to Chrome’s native system.
    </p>
    <p>
        I’m detail-oriented, organized, and consistent — always aiming for clean code, smooth UI/UX, and high performance. Whether it's designing intuitive interfaces or building scalable backend logic, I enjoy delivering complete, production-grade products.
    </p>
    <p>
        Outside of coding, I spend time sketching UI concepts, planning in Notion, staying up to date with tech trends, and refining my development workflows.
    </p>
    <p>
        I'm always looking to contribute to meaningful projects, collaborate with talented teams, and continuously grow as a developer.
    </p>
    <p><strong>Let’s build something amazing together!</strong></p>
</section>


            <div className='education'>
                <div className='heading'>Educational Background</div>
                <br />
                <ul>
                    <li style={{ animationDelay: '0.1s' }}>
                        <label>Vellore Institute of Technology, Vellore</label>
                        <div className='Academic'>
                            <div className='Academic-detail'>
                                Computer Science and Engineering
                                <year>2021 - 2025</year>
                                <p>CGPA - 8.08</p>
                            </div>
                            <div className='Academic-img'>
                            <img src={Vtop} alt='...' />
                            </div>

                        </div>
                    </li>
                    <li style={{ animationDelay: '0.2s' }}>
                        <label>Brilliant Public School, Bilaspur</label>
                        <div className='Academic'>
                            <div className='Academic-detail'>
                                Class 12
                                <year>2020 - 2021</year>
                                <p>Percentage - 80.4%</p>
                            </div>
                            <div className='Academic-img'>
                                <img src={Brilliant} alt='...' />
                            </div>

                        </div>
                    </li>
                    <li style={{ animationDelay: '0.3s' }}>
                        <label>Brilliant Public School, Bilaspur</label>
                        <div className='Academic'>
                            <div className='Academic-detail'>
                                Class 10
                                <year>2018 - 2019</year>
                                <p>Percentage - 84%</p>
                            </div>
                            <div className='Academic-img'>
                                <img src={Brilliant} alt='...' />
                            </div>

                        </div>
                    </li>
                </ul>
            </div>

            <div className='skills'>
                <div className='heading'>Skills & Expertise</div>
                <ul>
                    <li>
                        <div className='image'>
                            <img src='https://www.macworld.com/wp-content/uploads/2023/01/learn_java_on_mac.jpg?quality=50&strip=all' alt='...' />
                            <img src='https://png.pngtree.com/png-vector/20220531/ourmid/pngtree-concept-icon-with-blue-gradient-for-data-structures-and-algorithms-vector-png-image_46896760.jpg' alt='...' />
                        </div>
                        <label>Java & DSA</label>
                        <p>I have developed strong skills in Java and DSA, improving my problem-solving and coding efficiency.</p>
                    </li>
                    <li>
                        <div className='image'>
                            <img src='https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png' alt='...' />
                        </div>
                        <label>Web Development</label>
                        <p>I have strong full-stack web development skills, working with both front-end and back-end technologies.</p>
                    </li>
                    <li>
                        <div className='image'>
                            <img src='https://github.blog/wp-content/uploads/2013/04/074d0b06-a5e3-11e2-8b7f-9f09eb2ddfae.jpg?resize=1234%2C701' alt='...' />
                            <img src='https://www.svgrepo.com/show/327408/logo-vercel.svg' alt='...' />
                        </div>
                        <label>Tools</label>
                        <p>I am proficient in using tools like Git, GitHub, Vercel, Notion, and Google Calendar for version control, deployment, and task management.</p>
                    </li>
                </ul>
            </div>

            {/* <Footer /> */}
        </div>
    )
}
