import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';
import image from "./img2.jpg";
import { Navigate } from 'react-router-dom';

function App() {

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path='education' element={<Education />} />
          <Route path='work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router >
    </div >
  );
}

export default App;
