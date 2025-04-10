
import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ()=>{
    return (
        <nav className='navBar'>
            <h2 className='logo'> FASHION</h2>
            <div className='links'>
            <ul className="nav-links">
                <li><Link to="/catalog">CATALOGUE</Link></li>
                <li><Link to="/catalog">FASHION</Link></li>
                <li><Link to="/catalog">FAVOURITE</Link></li>
                <li><Link to="/catalog">LIFESTYLE</Link></li>
            </ul>
                <button className="nav-button">SIGN UP</button>
            </div>
        </nav>
    )
}

export default NavBar;
