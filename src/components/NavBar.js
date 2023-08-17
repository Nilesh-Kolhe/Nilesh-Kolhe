import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import './NavBar.css';
import image from './logo-svg.svg';
import { useState, useEffect } from "react";

const NavBar = () => {
    const baseUrl = "https://nilesh-kolhe.github.io/My/#";
    const [current, setCurrent] = useState("home");
    useEffect(() => {
        console.log('Current Location: ', current);
    }, [current]);

    return (
        <div style={{ height: "50px" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-black" href={`${baseUrl}/home`}>
                        <img src={`${image}`} alt="Logo" />
                    </a>
                    <button className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar"
                        aria-controls="navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-lg-end" style={{ width: "100%" }}>
                            <li className="nav-item">
                                <a className={current.includes("home") ? "nav-link current" : "nav-link"} onClick={() => setCurrent("home")} aria-current="page" href={`${baseUrl}/home`}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={current.includes("education") ? "nav-link current" : "nav-link"} onClick={() => setCurrent("education")} href={`${baseUrl}/education`}>Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" onClick={() => setCurrent("experience")} href={`${baseUrl}/experience`}>Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" onClick={() => setCurrent("contact")} href={`${baseUrl}/contact`}>Contact Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;