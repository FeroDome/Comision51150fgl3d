import "./Navbar.css"
import CartWidget from "../CartWitget/CartWitget";

import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <section className="buttons">
                <NavLink to='/category/Coleccionables 'className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Coleccionables</NavLink>
                <NavLink to='/category/Mates'className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Mates</NavLink>
                <NavLink to='/category/Miniaturas' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Miniaturas</NavLink>
                </section>
            <h1 className="navbar-logo">Bienvenidos</h1>
            <CartWidget />
            </nav>
            
        </div>
    );
};

export default Navbar;