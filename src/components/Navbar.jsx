import logo from "../assets/logo.png"
import "./Navbar.css"

function Navbar(){
    return(
        <nav id="navbar">
            <img id="navbar-logo" src={logo} alt="Logo image" />
            <h2 id="navbar-title">Meme Generator</h2>
        </nav>
    )
}

export default Navbar