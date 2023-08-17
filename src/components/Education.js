import 'bootstrap/dist/css/bootstrap.min.css';
import './Education.css';

const Education = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body body-container">
                    <h2 class="card-title">Pune University</h2>
                    <h6 class="card-subtitle mb-2">Pune</h6>
                    <h6 class="card-subtitle mb-2">Bachelor of Engineering (Computer)</h6>
                    <i class='fas fa-angle-right'></i>
                </div>
                <div className="card-body" style={{ fontSize: "smaller" }}>
                    <p class="card-text">
                        <ul>
                            <li>
                                This being my Alma Mater, I studied Computer Engineering here.
                            </li>
                            <li>
                                This four year dgree course ended with a major group project in the last year.
                                Our team got our hands dirty on the project topic of <u>Fake Reviewer's Group Detection System</u>.
                            </li>
                            <li>
                                Apart from four years of academic studies, I got plenty of opportunities to enroll and experience various extra curricular activities.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-body body-container">
                    <h2 class="card-title">C-DAC ACTS</h2>
                    <h6 class="card-subtitle mb-2">Pune</h6>
                    <h6 class="card-subtitle mb-2">Post Graduate Diploma in Advanced Computing (PG-DAC)</h6>
                    <i class='fas fa-angle-right'></i>
                </div>
                <div className="card-body" style={{ fontSize: "smaller" }}>
                    <p class="card-text">
                        <ul style={{ paddingLeft: "8px", listStyleType: "square" }}>
                            <li>
                                C-DAC, ACTS institute is recognised for it's invention of super computer in India <u>(PARAM)</u>.
                            </li>
                            <li>
                                After the completion of my graduation, I got a chance to study a six month's diploma course at this prestigious institute.
                            </li>
                            <li>
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