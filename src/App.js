import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';



function App() {
  return (
    <div className="App">
      <Router>
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
