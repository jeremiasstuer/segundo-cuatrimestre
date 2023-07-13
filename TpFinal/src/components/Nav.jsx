import "../styles/Nav.css";
import { useState } from "react";
const Nav = ({ alert, compra, children }) => {
    const arrChildren = children.map(item => item)

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <nav >
                <div className="contBurger" >
                    <button className="btnBurger" onClick={toggleMenu}>☰</button>
                </div>
                <div className={`contCategorias ${showMenu ? "ocultar" : ""}`}>
                    {arrChildren[0]}
                </div>
                <div className="contBuscadorNav">
                    {arrChildren[1]}
                </div>
                <div>
                    {arrChildren[2]}
                    <span className="numCompra">{compra}</span>
                </div>
            </nav>

        </>
    );
};

export default Nav;