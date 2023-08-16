import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import image from "./img2.jpg"; 

function App() {

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", backgroundImage:`url(${image})`, backgroundSize:"cover" }}>
      <Router basename='My/'>
        <NavBar />
        <Routes>
          <Route path="#/" element={<Home />} />
          <Route path='#/education' element={<Education />} />
          <Route path='#/experience' element={<Experience />} />
          <Route path='#/contact' element={<Contact />} />
        </Routes>
      </Router >
    </div >
  );
}

export default App;
