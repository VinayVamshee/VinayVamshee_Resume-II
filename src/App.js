import './App.css';
import vinayvamsheeResume from './Vinay Vamshee Resume.pdf'
import vinayvamshee from './Screenshot 2024-12-15 at 9.28.44 PM.png'
import backgroundImg from './—Pngtree—blue gradient color shape design_8462284.png';
import backgroundImg2 from './abstract-grunge-halftone-textured-background-design_84443-21960.avif'

function App() {
  return (
    <div className="App">
      <div className='menu'>
        <name>Vinay Vamshee</name>
        <div className='navigation'>
          <a href='#home' className='btn'>Home</a>
          <a href='#about' className='btn'>About</a>
          <a href='#project' className='btn'>Projects</a>
        </div>
      </div>

      <div id="home" className='home'>
        <div className='intro'>
          <name> <span>I</span>
            <span>'</span>
            <span>m</span>
            <span>&nbsp; </span>
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
            <span>.</span></name>
          <designation>Full Stack Developer</designation>
          <div className='devtools'>
            <img style={{ animationDelay: '0.1s' }} src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='...' />
            <img style={{ animationDelay: '0.3s' }} src='https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' alt='...' />
            <img style={{ animationDelay: '0.5s' }} src='https://www.manektech.com/storage/developer/1646733543.webp' alt='...' />
            <img style={{ animationDelay: '0.7s' }} src='https://i.pinimg.com/originals/b2/31/7e/b2317e8174e5fcef57c74c662f57d155.png' alt='...' />
          </div>

          <div className='info'>
            <a href={vinayvamsheeResume} download="Vinay_Vamshee_CV.pdf" className='btn downloadCV'>Download CV</a>
            <div className='contact'>
              <a href="tel:+91752397404">Call</a>
              <a href="mailto:vinayvamshee2183@gmail.com">Mail</a>
            </div>
          </div>
        </div>
        <div className='profilePic'>
          <img src={vinayvamshee} alt='...' />
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
          <img src='https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.30808-6/277519684_10158675188522823_7436488509713286219_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NQpywAEmTB0Q7kNvgGEJYYZ&_nc_zt=23&_nc_ht=scontent.fmaa2-3.fna&_nc_gid=ACgDmfTTjphO-iV1AFVXOQP&oh=00_AYAWZOga4f-seljnGinPJ_xwsBtxNB25aO-hB_pJ3Oui7Q&oe=6762542B' alt='...' />
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
      <hr />
      <div id='about' className='about'>
        <heading>About</heading>
        <div className='description'>
          Welcome to my portfolio! I’m a CSE student at VIT Vellore, and I specialize in Full Stack Web Development.
          I work on everything from frontend to backend, including MongoDB management.
          I'm passionate about exploring new technologies and frameworks, and I truly enjoy creating websites.
          Over time, I’ve gained hands-on experience in Full Stack development, having worked on several projects, one of which is live. I also have a strong foundation in Java, DSA, and OOPS. In addition, I've had the opportunity to lead a few hackathons, which has helped me develop strong leadership skills. I'm a well-organized person with great time management, always looking for ways to improve and stay efficient in my work.
          <br />Thanks for visiting! Feel free to explore my projects and get in touch!
        </div>

        <div className='education'>
          <strong>Education</strong>
          <br />
          <ul>
            <li>
              <label>Vellore Institute of Technology, Vellore</label>
              Computer Science and Engineering with Specialization in IoT
              <year>2021 - 2025</year>
              <p>CGPA - 8.08</p>
            </li>
            <li>
              <label>Brilliant Public School, Bilaspur</label>
              Class 12
              <year>2021</year>
              <p>Percentage - 80.4%</p>
            </li>
            <li>
              <label>Brilliant Public School, Bilaspur</label>
              Class 10
              <year>2019</year>
              <p>Percentage - 84%</p>
            </li>
          </ul>
        </div>
        <br/>

        <div className='skills'>
          <strong>Skills</strong>
          <br />
          <br />
          <ul>
            <li>
              <div className='image'>
                <img src='https://www.macworld.com/wp-content/uploads/2023/01/learn_java_on_mac.jpg?quality=50&strip=all' alt='...' />
                <img src='https://yt3.googleusercontent.com/h0n8phylgeZKuMlGmcPhkOM8rkV1IHTr5oumqZL581iQCSeMeFrnmYB69a69RQAQoVqgxM5ENX8=s900-c-k-c0x00ffffff-no-rj' alt='...' />
              </div>
              <label>JAVA & DSA</label>
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
                <img src='https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/305030538_579414803973354_2633084763465422245_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_3qbcKjM6osQ7kNvgHKydMz&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=Ass85uWrsI1uRDhe55CpeQL&oh=00_AYCKYt7iIrMSfOJ_tpjRH6JxApe06zXK1jRTfwa_wm9f5w&oe=67624205' alt='...' />
              </div>
              <label>Tools</label>
              <p>I am proficient in using tools like Git, GitHub, Vercel, Notion, and Google Calendar for version control, deployment, and task management.</p>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div id='project' className='projects'>
        <heading>Projects</heading>
        <div className='websites'>
          <div className='website'>
            <div className='image'>
              <img src='https://i.ibb.co/0MfYpWh/Screenshot-2024-01-16-at-9-33-50-AM.png' alt='...' />
              <a href='https://www.vamsheetechnoschool.com/' target='_blank' rel="noreferrer" className="btn">
                <img src='https://cdn-icons-png.flaticon.com/512/13437/13437567.png' alt='...' />
              </a>
            </div>

            <name>Vamshee Techno School</name>
            <div className='links'>
              <div className='link'>
                <a href='https://github.com/VinayVamshee/Project---Techno.git'>Github Repository</a>
              </div>
              <p class="d-inline-flex gap-1">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseVamsheeTechnoSchool" aria-expanded="false" aria-controls="CollapseVamsheeTechnoSchool">
                </button>
              </p>
            </div>
            <div class="collapse" id="CollapseVamsheeTechnoSchool">
              <div >
                A project improving accessibility and functionality for <br />educational management.
              </div>
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
              <p class="d-inline-flex gap-1">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseCCCSECRBSP" aria-expanded="false" aria-controls="CollapseCCCSECRBSP">
                </button>
              </p>
            </div>
            <div class="collapse" id="CollapseCCCSECRBSP">
              <div class="">
                A live web platform for station employees to manage books, <br />videos, notices, and contacts, with admin controls for <br />content management.
              </div>
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
              <p class="d-inline-flex gap-1">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseRRRSECR" aria-expanded="false" aria-controls="CollapseRRRSECR">
                </button>
              </p>
            </div>
            <div class="collapse" id="CollapseRRRSECR">
              <div class="">
                A project that digitizes and streamlines staff room management, <br />automating occupancy tracking and data management across <br />multiple stations.
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className='footer'>
        <div className='connect'>
          <a href="tel:+91752397404" target='_blank' rel="noreferrer"><img src='https://cdn-icons-png.flaticon.com/512/5356/5356411.png' alt='...' /></a>
        </div>
        <div className='connect'>
          <a href="mailto:vinayvamshee2183@gmail.com" target='_blank' rel="noreferrer"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png' alt='...' /></a>
        </div>
        <div className='connect'>
          <a href='https://in.linkedin.com/in/pechetti-vinay-vamshee-251245231' target='_blank' rel="noreferrer"><img src='https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png' alt='...' /></a>
        </div>
        <div className='connect'>
          <a href='https://www.facebook.com/VinayVamshee/' target='_blank' rel="noreferrer"><img src='https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=210' alt='...' /></a>
        </div>
        <div className='connect'>
          <a href='https://www.instagram.com/vinayvamshee/?igsh=cnJrM3g0Z3c1OXZ4' target='_blank' rel="noreferrer"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png' alt='...' /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
