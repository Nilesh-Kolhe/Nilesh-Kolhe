import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Router>
        <NavBar />
        <Routes>
          <Route path="/My" element={<Home />} />
          <Route path='/My/education' element={<Education />} />
          <Route path='/My/experience' element={<Experience />} />
          <Route path='/My/contact' element={<Contact />} />
        </Routes>
      </Router >
    </div >
  );
}

export default App;
