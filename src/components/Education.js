import 'bootstrap/dist/css/bootstrap.min.css';
import './Education.css';

const Education = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="body-container">
                    <p className="title">Pune University</p>
                    <p className="subtitle">Pune</p>
                    <p className="subtitle" style={{ fontWeight: "700px" }}>Bachelor of Engineering (Computer)</p>
                </div>
                <div className="card-body" style={{ fontSize: "smaller", paddingLeft: "10px" }}>
                    <p classname="card-text">
                        <ul>
                            <li>
                                This being my Alma Mater, I studied Computer Engineering here.
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
                    <p className="title">C-DAC ACTS</p>
                    <p className="subtitle">Pune</p>
                    <p className="subtitle" style={{ fontWeight: "700px" }}>Post Graduate Diploma in Advanced Computing</p>
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