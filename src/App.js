import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Lenis from 'lenis';

import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import ProjectInfo from './Components/ProjectInfo';
import Footer from './Components/Footer';

const TRACKING_ID = 'G-4WJD35TY5L';
ReactGA.initialize(TRACKING_ID);

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  // Initialize Native Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">

      <Router>
        <AnalyticsTracker />
        <Menu />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/About' exact element={<About />} />
          <Route path='/Projects' exact element={<Projects />} />
          <Route path="/project/:id" element={<ProjectInfo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;