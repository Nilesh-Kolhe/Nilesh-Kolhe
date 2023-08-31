import { useState } from "react";
import './Contact.css';
import location from './Location.svg';
import linkedin from './LinkedIn.svg';
import instagram from './Instagram.svg';

const Contact = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputs.firstname === "" || inputs.firstname === undefined) {
            const firstname = document.getElementsByName("firstname");
            firstname[0].style.borderStyle = "groove";
            firstname[0].style.borderColor = "red";
        }
        if (inputs.lastname === "" || inputs.firstname === undefined) {
            const lastname = document.getElementsByName("lastname");
            lastname[0].style.borderStyle = "groove";
            lastname[0].style.borderColor = "red";
        }
        if (inputs.email === "" || inputs.email === undefined) {
            const email = document.getElementsByName("email");
            email[0].style.borderStyle = "groove";
            email[0].style.borderColor = "red";
        }
        console.log('Console First Name: ', inputs.firstname, ' Last Name: ', inputs.lastname, ' Email ID: ', inputs.email, ' Subject: ', inputs.subject);
    }

    return (
        <div style={{ display: "flex", height: "100%" }}>
            <div className="container" style={{ width: "70%" }}>
                <div className="card" style={{ borderStyle: "none" }}>
                    <div className="body-container" style={{ backgroundColor: "whitesmoke", color: "#000" }}>
                        <div className="img-container" style={{ flexDirection: "row", margin: "25px 0px" }}>
                            <img src={`${location}`} alt="Location Logo" />
                            <div>
                                <p className="text-muted">Punawale</p>
                                <p className="text-muted">Pune, Maharashtra, India - 411033</p>
                            </div>
                        </div>
                        <div className="img-container" style={{ flexDirection: "row", margin: "25px 0px" }}>
                            <img src={`${linkedin}`} alt="LinkedIn Logo" />
                            <p className="text-muted">/nilesh-kolhe/</p>
                        </div>
                        <div className="img-container" style={{ flexDirection: "row", margin: "25px 0px" }}>
                            <img src={`${instagram}`} alt="Instagram Logo" />
                            <p className="text-muted">/neelesh_kolhe</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card" style={{ width: "100%", borderStyle: "none" }}>
                    <div className="body-container" style={{ backgroundColor: "whitesmoke", color: "#000" }}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: "flex" }}>
                                <input
                                    className="contact-form"
                                    placeholder="First Name"
                                    type="text"
                                    name="firstname"
                                    value={inputs.firstname || ""}
                                    onChange={handleChange}
                                />
                                <input
                                    className="contact-form"
                                    placeholder="Last Name"
                                    type="text"
                                    name="lastname"
                                    value={inputs.lastname || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    className="contact-form"
                                    style={{ width: "100%" }}
                                    placeholder="Your Email ID"
                                    type="text"
                                    name="email"
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    className="contact-form"
                                    style={{ width: "100%", height: "100px" }}
                                    placeholder="Your Message Goes here"
                                    type="text"
                                    name="message"
                                    value={inputs.message || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <input className="submit-button" style={{ width: "15%" }} type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;