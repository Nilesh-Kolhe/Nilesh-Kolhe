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
        <div className="container">
            <div className="card" style={{ marginRight: "20px" }}>
                <div className="body-container">
                    <p className="title" style={{ textAlign: "center" }}>Front-End</p>
                </div>
                <div className="card-body" style={{ display: "flex", fontSize: "smaller", paddingLeft: "10px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div className="img-container">
                            <img src={`${html}`} alt="HTML Logo" />
                            <p>HTML 5</p>
                        </div>
                        <div className="img-container">
                            <img src={`${css}`} alt="CSS Logo" />
                            <p>CSS</p>
                        </div>
                        <div className="img-container">
                            <img src={`${js}`} alt="JavaScript Logo" />
                            <p>JavaScript</p>
                        </div>
                        <div className="img-container">
                            <img src={`${ts}`} alt="TypeScript Logo" />
                            <p>TypeScript</p>
                        </div>
                        <div className="img-container">
                            <img src={`${bootstrap}`} alt="Bootstrap Logo" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="img-container">
                            <img src={`${redux}`} alt="Redux Logo" />
                            <p>Redux</p>
                        </div>
                        <div className="img-container">
                            <img src={`${angular}`} alt="Angular Logo" />
                            <p>Angular</p>
                        </div>

                        <div className="img-container">
                            <img src={`${react}`} alt="React Logo" />
                            <p>React</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ marginRight: "20px" }}>
                <div className="body-container">
                    <p className="title" style={{ textAlign: "center" }}>Back-End</p>
                </div>
                <div className="card-body" style={{ display: "flex", fontSize: "smaller", paddingLeft: "10px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div className="img-container">
                            <img src={`${csharp}`} alt="C-Sharp Logo" />
                            <p>C Sharp</p>
                        </div>
                        <div className="img-container">
                            <img src={`${dotnet}`} alt="Dot Net Logo" />
                            <p>Dot Net</p>
                        </div>
                        <div className="img-container">
                            <img src={`${dotnetcore}`} alt="Dot Net Core Logo" />
                            <p>Dot Net Core</p>
                        </div>
                        <div className="img-container">
                            <img src={`${azure}`} alt="Azure Logo" />
                            <p> MS Azure </p>
                        </div>
                        <div className="img-container">
                            <img src={`${azuredevops}`} alt="Azure DevOps Logo" />
                            <p> Azure DevOps </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="body-container">
                    <p className="title" style={{ textAlign: "center" }}>Misc</p>
                </div>
                <div className="card-body" style={{ display: "flex", fontSize: "smaller", paddingLeft: "10px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div className="img-container">
                            <img src={`${vscode}`} alt="VS-Code Logo" />
                            <p> VS Code </p>
                        </div>
                        <div className="img-container">
                            <img src={`${visualstudio}`} alt="VS Logo" />
                            <p> Visual Studio </p>
                        </div>
                        <div className="img-container">
                            <img src={`${postman}`} alt="Postman Logo" />
                            <p> Postman </p>
                        </div>
                        <div className="img-container">
                            <img src={`${git}`} alt="Git Logo" />
                            <p> GIT </p>
                        </div>
                        <div className="img-container">
                            <img src={`${jira}`} alt="Jira Logo" />
                            <p> JIRA </p>
                        </div>
                        <div className="img-container">
                            <img src={`${agile}`} alt="Agile Logo" />
                            <p> Agile </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;