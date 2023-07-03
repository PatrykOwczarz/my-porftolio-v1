import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

function Navbar(){
    return (
        <div className="navbar">
            <h2>Patryk Owczarz</h2>
            <div className="links">
                <div className='element'>
                    <Link to="/"> Home </Link>
                    <Link to="/projects"> Projects </Link>
                    <Link to="/Contact"> Contact me </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;