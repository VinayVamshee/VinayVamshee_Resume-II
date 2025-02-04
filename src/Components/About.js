import React, { useEffect } from 'react'
import Footer from './Footer'

export default function About() {
    useEffect(() => {
        if (CSS.supports("animation-timeline", "view()")) {
          return; // Don't run IntersectionObserver if animation-timeline is supported
        }
    
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
          { threshold: 0.3 } // Adjust visibility trigger (0 = when barely visible, 1 = fully visible)
        );
    
        const items = document.querySelectorAll(".skills ul li",".education ul li");
        items.forEach((item) => observer.observe(item));
    
        return () => {
          items.forEach((item) => observer.unobserve(item));
        };
      }, []);
    
    return (
        <div id='about' className='about'>

            <div className='description'>
                <div className='heading'>Who I Am and What I Do</div>
                Hello! I'm Pechetti Vinay Vamshee, a Computer Science Engineering student at VIT Vellore.<br/><br/> I specialize in full-stack development with a strong foundation in Java, Data Structures, Algorithms, and Object-Oriented Programming. My experience extends to the MERN stack, where I have hands-on expertise in both front-end and back-end development, including MongoDB.
                I'm passionate about technology and always strive to stay updated with new trends and advancements. Several of my projects are live, with one attracting 100+ daily visitors and 5000 to 10,000 views per month. I take pride in my discipline, consistency, and time management skills, which have allowed me to achieve these milestones. I'm always eager to learn and grow, and I'm excited to continue exploring innovative technologies.
                <br /><br/>
                Feel free to explore my work and get in touch with me through the contact section.
            </div>

            <div className='education'>
                <div className='heading'>Educational Background</div>
                <br />
                <ul>
                    <li style={{animationDelay: '0.1s'}}>
                        <label>Vellore Institute of Technology, Vellore</label>
                        <div className='Academic'>
                            <div className='Academic-detail'>
                                Computer Science and Engineering
                                <year>2021 - 2025</year>
                                <p>CGPA - 8.08</p>
                            </div>
                            <div className='Academic-img'>
                                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png' alt='...'/>
                            </div>

                        </div>
                    </li>
                    <li style={{animationDelay: '0.2s'}}>
                        <label>Brilliant Public School, Bilaspur</label>
                        <div className='Academic'>
                            <div className='Academic-detail'>
                                Class 12
                                <year>2020 - 2021</year>
                                <p>Percentage - 80.4%</p>
                            </div>
                            <div className='Academic-img'>
                                <img src='https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/309798914_472267424919730_1155259854718216907_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jleUyzGwSmAQ7kNvgFjTXLO&_nc_oc=AdiLTcBZhkRkkO_X_ufBtdS7hCLOAg9Dta1T2h2qg4GMZQU1-lbKsxeHahYIx-hfGVersJG4ibmBaQMJbV8SqTr0&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=A_udl-gafbRfsrnoBO-gfyT&oh=00_AYDy_MmpGZL_udCaO-skOlMYhAWp8Wx75iHf2Vo-D3ueNA&oe=67A7A4E0' alt='...'/>
                            </div>

                        </div>
                    </li>
                    <li style={{animationDelay: '0.3s'}}>
                        <label>Brilliant Public School, Bilaspur</label>
                        <div className='Academic'>
                            <div className='Academic-detail'>
                                Class 10
                                <year>2018 - 2019</year>
                                <p>Percentage - 84%</p>
                            </div>
                            <div className='Academic-img'>
                                <img src='https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/309798914_472267424919730_1155259854718216907_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jleUyzGwSmAQ7kNvgFjTXLO&_nc_oc=AdiLTcBZhkRkkO_X_ufBtdS7hCLOAg9Dta1T2h2qg4GMZQU1-lbKsxeHahYIx-hfGVersJG4ibmBaQMJbV8SqTr0&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=A_udl-gafbRfsrnoBO-gfyT&oh=00_AYDy_MmpGZL_udCaO-skOlMYhAWp8Wx75iHf2Vo-D3ueNA&oe=67A7A4E0' alt='...'/>
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

            <Footer/>
        </div>
    )
}
