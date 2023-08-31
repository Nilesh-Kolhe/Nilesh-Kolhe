import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work';
import image from "./img2.jpg";
import telephone from "./telephone.jpg";
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";

function App() {
  const currentLocation = window.location.href;
  console.log('Use Location Location: ', currentLocation);
  let backgroundImage = image;
  useEffect(() => {
    console.log('UseEffect Use Location Location: ', currentLocation);
    console.log("window Location: ", window.location.href, ' Includes : ', window.location.href.includes("contact"));
    if(window.location.href.includes("contact")) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      backgroundImage = telephone;
    }
  }, []);

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}>
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
