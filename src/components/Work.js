import angular from './Angular.svg';
import react from './React.svg';
import azure from './Azure.svg';
import csharp from './C-Sharp.svg';
import vscode from './VS-Code.svg';
import visualstudio from './VS-2013.svg';
import html from './HTML.svg';
import css from './CSS.svg';
import js from './JS.svg';
import ts from './TS.svg';
import agile from './Agile.svg';
import dotnet from './Dot-Net.svg';
import dotnetcore from './Dot-Net-Core.svg';
import bootstrap from './bootstrap.svg';
import postman from './postman.svg';
import git from './GIT.svg';
import redux from './redux.svg';
import azuredevops from './azure-devops.svg';
import jira from './Jira.svg';
import './Work.css';

const Work = () => {
    return (
        <div className="work-container">
            <div className="card" style={{ margin: "20px" }}>
                <div className="body-container" style={{ display: "flex", fontSize: "smaller", paddingLeft: "10px", height: "100%", backgroundColor: "whitesmoke", color: "#000" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
                        <div className="img-container">
                            <img className="tech-logo" src={`${html}`} alt="HTML Logo" />
                            <p>HTML 5</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${css}`} alt="CSS Logo" />
                            <p>CSS</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${js}`} alt="JavaScript Logo" />
                            <p>JavaScript</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${ts}`} alt="TypeScript Logo" />
                            <p>TypeScript</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${bootstrap}`} alt="Bootstrap Logo" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${redux}`} alt="Redux Logo" />
                            <p>Redux</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${angular}`} alt="Angular Logo" />
                            <p>Angular</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${react}`} alt="React Logo" />
                            <p>React</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ margin: "20px" }}>
                <div className="body-container" style={{ display: "flex", fontSize: "smaller", paddingLeft: "10px", height: "100%", backgroundColor: "whitesmoke", color: "#000" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
                        <div className="img-container">
                            <img className="tech-logo" src={`${csharp}`} alt="C-Sharp Logo" />
                            <p>C Sharp</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${dotnet}`} alt="Dot Net Logo" />
                            <p>Dot Net</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${dotnetcore}`} alt="Dot Net Core Logo" />
                            <p>Dot Net Core</p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${azure}`} alt="Azure Logo" />
                            <p> MS Azure </p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${azuredevops}`} alt="Azure DevOps Logo" />
                            <p> Azure DevOps </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ margin: "20px" }}>
                <div className="body-container" style={{ display: "flex", fontSize: "smaller", paddingLeft: "10px", height: "100%", backgroundColor: "whitesmoke", color: "#000" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
                        <div className="img-container">
                            <img className="tech-logo" src={`${vscode}`} alt="VS-Code Logo" />
                            <p> VS Code </p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${visualstudio}`} alt="VS Logo" />
                            <p> Visual Studio </p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${postman}`} alt="Postman Logo" />
                            <p> Postman </p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${git}`} alt="Git Logo" />
                            <p> GIT </p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${jira}`} alt="Jira Logo" />
                            <p> JIRA </p>
                        </div>
                        <div className="img-container">
                            <img className="tech-logo" src={`${agile}`} alt="Agile Logo" />
                            <p> Agile </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;