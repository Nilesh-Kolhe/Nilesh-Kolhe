import './Contact.css';
import location from './Location.svg';
import linkedin from './LinkedIn.svg';
import instagram from './Instagram.svg';

const Contact = () => {
    // const [inputs, setInputs] = useState({});

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({ ...values, [name]: value }))
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (inputs.firstname === "" || inputs.firstname === undefined) {
    //         const firstname = document.getElementsByName("firstname");
    //         firstname[0].style.borderStyle = "groove";
    //         firstname[0].style.borderColor = "red";
    //     }
    //     if (inputs.lastname === "" || inputs.firstname === undefined) {
    //         const lastname = document.getElementsByName("lastname");
    //         lastname[0].style.borderStyle = "groove";
    //         lastname[0].style.borderColor = "red";
    //     }
    //     if (inputs.email === "" || inputs.email === undefined) {
    //         const email = document.getElementsByName("email");
    //         email[0].style.borderStyle = "groove";
    //         email[0].style.borderColor = "red";
    //     }
    //     console.log('Console First Name: ', inputs.firstname, ' Last Name: ', inputs.lastname, ' Email ID: ', inputs.email, ' Subject: ', inputs.subject);
    // }

    return (
        <div className="contact-container">
            <div className="container" style={{ width: "50%" }}>
                {/* <img id="contact" src={`${image}`} alt="Logo" /> */}
            </div>

            <div className="container">
                <div className="card" style={{ display: "flex", borderStyle: "none", width: "80%" }}>
                    <div className="body-container" style={{ display: "flex", backgroundColor: "whitesmoke", color: "#000" }}>
                        <div className="img-container" style={{ flexDirection: "row", margin: "25px 0px" }}>
                            <img src={`${location}`} alt="Location Logo" />
                            <div>
                                <p className="text-muted">Punawale</p>
                                <p className="text-muted">Pune, Maharashtra, India - 411033</p>
                            </div>
                        </div>
                        <div className="img-container" style={{ flexDirection: "row", margin: "25px 0px" }}>
                            <img src={`${linkedin}`} alt="LinkedIn Logo" />
                            <a className="text-muted" href="https://www.linkedin.com/in/nilesh-kolhe/" rel="noreferrer" target="_blank">/nilesh-kolhe</a>
                        </div>
                        <div className="img-container" style={{ flexDirection: "row", margin: "25px 0px" }}>
                            <img src={`${instagram}`} alt="Instagram Logo" />
                            <a className="text-muted" href="https://instagram.com/neelesh_kolhe/" rel="noreferrer" target="_blank"><p className="text-muted">/neelesh_kolhe</p></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;