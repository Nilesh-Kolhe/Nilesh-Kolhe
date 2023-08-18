import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import './NavBar.css';
import image from './logo-svg.svg';
import { useState } from "react";

const NavBar = () => {
    const baseUrl = "https://nilesh-kolhe.github.io/My/#";
    const [current, setCurrent] = useState("home");

    document.addEventListener("click", function (event) {
        var clickover = event.target;
        // var navbar = document.getElementById("navbar");   
        var navbar = document.querySelector("nav div.container-fluid div#navbar");
        var _opened = navbar.classList.contains("show");
        if (_opened === true) {
            navbar.classList.remove('show');
            navbar.classList.add('hide');
        }
    });

    return (
        <div style={{ height: "50px" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-black" onClick={() => setCurrent("home")} href={`${baseUrl}/home`}>
                        <img src={`${image}`} alt="Logo" />
                    </a>
                    <button className="navbar-toggler collapsed"
                        style={{ backgroundColor: "#fff" }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar"
                        aria-controls="navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbar">
                        <ul className="navbar-nav mb-lg-0 justify-content-lg-end" style={{ width: "100%" }}>
                            <li className="nav-item">
                                <a className={current.includes("home") ? "nav-link current" : "nav-link"} onClick={() => setCurrent("home")} style={{ color: "black", fontWeight: "700", paddingRight: "7px" }} aria-current="page" href={`${baseUrl}/home`}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={current.includes("education") ? "nav-link current" : "nav-link"} onClick={() => setCurrent("education")} style={{ color: "black", fontWeight: "700", paddingRight: "7px" }} href={`${baseUrl}/education`}>Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" onClick={() => setCurrent("work")} style={{ color: "black", fontWeight: "700", paddingRight: "7px" }} href={`${baseUrl}/work`}>Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" onClick={() => setCurrent("contact")} style={{ color: "black", fontWeight: "700", paddingRight: "7px" }} href={`${baseUrl}/contact`}>Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;