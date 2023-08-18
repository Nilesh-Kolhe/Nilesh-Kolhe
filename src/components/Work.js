import angular from './Angular.svg';
import react from './React.svg';
import azure from './Azure.svg';
import csharp from './C-Sharp.svg';
import vscode from './VS-Code.svg';
import visualstudio from './VS-2013.svg';

const Work = () => {
    return (
        <div className="container">
            <div className="card" style={{ marginRight: "20px" }}>
                <div className="body-container">
                    <p className="title" style={{ textAlign: "center" }}>UI Frameworks</p>
                </div>
                <div className="card-body" style={{ display: "flex", fontSize: "smaller", paddingLeft: "10px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={`${angular}`} alt="Angular Logo" />
                        <p style={{ paddingLeft: "17px" }}>Angular</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={`${react}`} alt="React Logo" />
                        <p style={{ paddingLeft: "23px" }}>React</p>
                    </div>
                </div>
            </div>

            <div className="card" style={{ marginRight: "20px" }}>
                <div className="body-container">
                    <p className="title" style={{ textAlign: "center" }}>Backend Tech</p>
                </div>
                <div className="card-body" style={{ display: "flex", fontSize: "smaller", paddingLeft: "10px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={`${csharp}`} alt="C-Sharp Logo" />
                        <p style={{ paddingLeft: "17px" }}>C Sharp</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={`${azure}`} alt="Azure Logo" /><p style={{ paddingLeft: "17px" }}> MS Azure </p></div>
                </div>
            </div>

            <div className="card">
                <div className="body-container">
                    <p className="title" style={{ textAlign: "center" }}>IDEs</p>
                </div>
                <div className="card-body" style={{ display: "flex", fontSize: "smaller", paddingLeft: "10px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={`${vscode}`} alt="VS-Code Logo" />
                        <p style={{ paddingLeft: "17px" }}> VS Code </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={`${visualstudio}`} alt="VS Logo" />
                        <p style={{ paddingLeft: "17px" }}> Visual Studio </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;