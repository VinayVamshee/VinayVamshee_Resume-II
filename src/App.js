import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';

import { useEffect } from 'react';

import ReactGA from 'react-ga4';

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
  return (
    <div className="App">
      <Router>
    <AnalyticsTracker />
      <Menu />
      <Routes>
        <Route  path='/' exact element={<Home/>}/>
        <Route  path='/About' exact element={<About/>}/>
        <Route  path='/Projects' exact element={<Projects/>}/>
      </Routes>
      </Router>
     

    </div>
  );
}

export default App;