import "./Navbar.css"
import CartWidget from "../CartWitget/CartWitget";
import { NavLink } from "react-router-dom";



export const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <NavLink className="navbar-logo" to="/">FGL 3D</NavLink>
                <ul>
                    <li>
                        <NavLink className="nav__link" to="/category/coleccionables" >Coleccionables</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/category/mates" >Mates</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/category/miniaturas" >Miniaturas</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav__link" to="/cart" >
                        <CartWidget />
                    </NavLink>
                    </li>
                </ul >

            </nav >

        </div >
    );
};

export default Navbar;