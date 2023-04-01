import "./Navbar.css"
import CartWidget from "../CartWitget/CartWitget";
import { NavLink } from "react-router-dom";



export const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <NavLink className="navbar-logo" to="/">FGL 3D</NavLink>
                <div className="categories">

                    <NavLink className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} to="/category/coleccionables" >Coleccionables</NavLink>

                    <NavLink className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} to="/category/mates" >Mates</NavLink>

                    <NavLink className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} to="/category/miniaturas" >Miniaturas</NavLink>
                </div >
                <CartWidget />

            </nav >

        </div >
    );
};

export default Navbar;