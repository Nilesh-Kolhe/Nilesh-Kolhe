import 'bootstrap/dist/css/bootstrap.min.css';
import './Education.css';
import PU from './pune-univ-black.jpg';
import CDAC from './CDAC.svg';

const Education = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="body-container">
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "400px" }}>
                            <p className="title">Pune University</p>
                            <p className="subtitle">Sinhgad Insitute, Pune</p>
                            <p className="subtitle" style={{ fontWeight: "700px" }}>Bachelor of Engineering (Computer)</p>
                        </div>
                        <div>
                            <a href="http://www.unipune.ac.in/">
                                <img className="edu-logo" src={`${PU}`} alt="University Logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-body" style={{ fontSize: "smaller", paddingLeft: "10px" }}>
                    <p classname="card-text">
                        <ul>
                            <li>
                                I studied Computer Engineering from Sinhgad Institute, Vadgaon Bk Campus.
                            </li>
                            <li>
                                This four year degree course ended with a major group project.
                                Our team got our hands dirty on the project topic of <u>Fake Reviewer's Group Detection System</u>.
                            </li>
                            <li className="lg-only">
                                Apart from four years of academic studies, I got plenty of opportunities to enroll and experience various extra curricular activities.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="body-container">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "400px" }}>
                            <p className="title">C-DAC</p>
                            <p className="subtitle">ACTS, Pune</p>
                            <p className="subtitle" style={{ fontWeight: "700px" }}>Post Graduate Diploma in Advanced Computing</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", paddingRight: "5px" }}>
                            <a href="https://www.cdac.in/">
                                <img className="edu-logo" src={`${CDAC}`} alt="University Logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-body" style={{ fontSize: "smaller", paddingLeft: "10px" }}>
                    <p classname="card-text">
                        <ul style={{ paddingLeft: "8px", listStyleType: "square" }}>
                            <li>
                                C-DAC, ACTS institute is recognised for it's invention of super computer in India <u>(PARAM)</u>.
                            </li>
                            <li>
                                After the completion of my graduation, I got a chance to study a six month's diploma course at this prestigious institute.
                            </li>
                            <li className="lg-only">
                                This course included studying of various computer subjects with rigourous hands on training in all of them.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;