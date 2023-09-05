import './Contact.css';
import location from './Location.svg';
import linkedin from './LinkedIn.svg';
import instagram from './Instagram.svg';
import twitter from './Twitter.svg';
import email from './GMail.svg';

const Contact = () => {

    return (
        <div className="contact-container">
            <div className="container">
                <div className="card" style={{ display: "flex", borderStyle: "none", width: "80%" }}>
                    <div className="body-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "whitesmoke", color: "#000" }}>
                        <div><div style={{ display: "flex", flexDirection: "column" }}>
                            <div className="img-container" style={{ flexDirection: "row", margin: "25px 5px" }}>
                                <img style={{height: "60px"}} src={`${location}`} alt="Location Logo" />
                                <div>
                                    <p className="fw-bolder">Location</p>
                                    <p className="text-muted">Punawale</p>
                                    <p className="text-muted">Pune, Maharashtra, India - 411033</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div>
                            <div style={{ display: "flex" }}>
                                <div className="img-container" style={{ flexDirection: "row", margin: "25px 5px" }}>
                                    <img style={{height: "40px"}} src={`${linkedin}`} alt="LinkedIn Logo" />
                                    <div>
                                        <p className="fw-bolder">LinkedIn</p>
                                        <a className="text-muted" href="https://www.linkedin.com/in/nilesh-kolhe/" rel="noreferrer" target="_blank">/nilesh-kolhe</a>
                                    </div>
                                </div>
                                <div className="img-container" style={{ flexDirection: "row", margin: "25px 5px" }}>
                                    <img style={{height: "40px"}} src={`${instagram}`} alt="Instagram Logo" />
                                    <div>
                                        <p className="fw-bolder">Instagram</p>
                                        <a className="text-muted" href="https://instagram.com/neelesh_kolhe/" rel="noreferrer" target="_blank"><p className="text-muted">/neelesh_kolhe</p></a>
                                    </div>
                                </div>
                                <div className="img-container" style={{ flexDirection: "row", margin: "25px 5px" }}>
                                    <img style={{height: "40px"}} src={`${twitter}`} alt="Twitter Logo" />
                                    <div>
                                        <p className="fw-bolder">Twitter</p>
                                        <a className="text-muted" href="https://instagram.com/neelesh_kolhe/" rel="noreferrer" target="_blank"><p className="text-muted">/NeeleshKolhe</p></a>
                                    </div>
                                </div>
                                <div className="img-container" style={{ flexDirection: "row", margin: "25px 5px" }}>
                                    <img style={{height: "37px"}} src={`${email}`} alt="Email Logo" />
                                    <div>
                                        <p className="fw-bolder">GMail</p>
                                        <a className="text-muted" href="mailto:nilesh.work.001@gmail.com" rel="noreferrer" target="_blank"><p className="text-muted">nilesh.work.001</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;