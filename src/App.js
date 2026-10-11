import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Lenis from 'lenis';

import Menu from './Components/Menu';
import FloatingTechGalaxy from './Components/FloatingTechGalaxy';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import ProjectInfo from './Components/ProjectInfo';
import Footer from './Components/Footer';

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset Lenis smooth scroll target and velocity immediately
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }

    // Reset native browser window scroll immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname]);

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

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <div className="App">

      <Router>
        <ScrollToTop />
        <AnalyticsTracker />
        <FloatingTechGalaxy />
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