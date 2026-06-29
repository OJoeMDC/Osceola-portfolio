import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return(
        <>
            <nav className="nav"> 
            <div className="logo nav-links">
                <Link to='#'>Osceola // Dev</Link>
            </div>
            <div className="nav-links">
                <Link to="#projects">Projects</Link>
                <Link to="#skills">Skills</Link>
                <Link to="#contact">Contact</Link>
            </div>
            </nav>
        </>
    )
}