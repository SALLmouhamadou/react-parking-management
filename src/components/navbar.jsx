import { NavLink} from "react-router-dom";
import '../components/css/Navbar.css';
function Navigation(){

    return(
        <div>
            <nav classeName="navbar">
                <div className="navbar-Logo"> <NavLink to="/">Parking GS</NavLink></div>
                <ul className="navbar-link">
                   <li className="navbar-link-item"><NavLink to="/">Accueil</NavLink></li>
                   <li className="navbar-link-item"><NavLink to="/">Nouvelle Carte</NavLink></li>
                   <li className="navbar-link-item"><NavLink to="/">Vérification</NavLink></li> 
                   <li className="navbar-link-item"><NavLink to="/">Login</NavLink></li> 
                </ul>
            </nav>
        </div>
    )
} export default Navigation;