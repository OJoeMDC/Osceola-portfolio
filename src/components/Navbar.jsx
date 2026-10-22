import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return(
        <>
            <nav className="nav"> 
            <div className="logo nav-links">
                <button onClick={() => 
                    document.getElementById("top")?.scrollIntoView({behavior: "smooth"}, )}
                    className='nav-link-main logo'
                    >
                        Osceola // Dev
                    </button>
            </div>
            <div className="nav-links">
                <button onClick={() => 
                    document.getElementById("projects")?.scrollIntoView({behavior: "smooth"}, )}
                    className='nav-link'
                    >
                    Projects
                </button>
                <button onClick={() => 
                    document.getElementById("quals")?.scrollIntoView({behavior: "smooth"}, )}
                    className='nav-link'
                    >
                        Skills
                    </button>
                <button onClick={() => 
                    document.getElementById("contact")?.scrollIntoView({behavior: "smooth"}, )}
                    className='nav-link'
                    >
                        Contact
                    </button>
            </div>
            </nav>
        </>
    )
}