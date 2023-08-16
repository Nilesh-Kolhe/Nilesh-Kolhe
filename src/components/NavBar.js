import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import './NavBar.css';
import image from './logo-svg.svg'

const NavBar = () => {

    return (
        <div style={{ height: "50px" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-black" href="/My">
                        <img src={`${image}`} alt="Kiwi standing on oval" />
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
                                <a className="nav-link" aria-current="page" href="https://nilesh-kolhe.github.io/My/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://nilesh-kolhe.github.io/My/#/education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://nilesh-kolhe.github.io/My/#/experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://nilesh-kolhe.github.io/My/#/contact">Contact Me</a>
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