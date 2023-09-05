import './Home.css';
import download from './download-icon.svg';

const Home = () => {
    return (
        <div className="home-container">
            <p className="text-muted" style={{fontSize: "x-large", fontWeight: "600", marginBottom: "0px"}}>Hi There &#128075; ! This is</p>
            <p style={{fontSize: "xxx-large", fontWeight: "700", marginBottom: "2px"}}>Neelesh Kolhe</p>
            <p style={{fontSize: "small", fontWeight: "700", marginBottom: "20px"}}>Coder &#128187; | Snapper &#128248; | Footballer &#9917;</p>
            <button type="submit" style={{borderRadius: "8px", height: "35px", width: "160px", fontWeight: "lighter", fontSize: "small"}}> <img style={{height: "9px", width: "20px"}} src={`${download}`} alt="Download Icon" /> Download Resume</button>
        </div>
    );
}

export default Home;