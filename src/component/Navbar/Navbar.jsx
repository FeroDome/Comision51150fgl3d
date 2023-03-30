import "./Navbar.css"
import CartWidget from "../CartWitget/CartWitget";



export const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <h1 className="navbar-logo">Bienvenidos</h1>
                <ul>
                    <li>
                        <a className="nav__link" href="#">Coleccionables</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Mates</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Miniaturas</a>
                    </li>
                </ul >
                <CartWidget />
            </nav >

        </div >
    );
};

export default Navbar;