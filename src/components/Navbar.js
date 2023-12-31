import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { Reorder } from '@material-ui/icons';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>

            <div className='mainNav'>
                <h2>Patryk Owczarz</h2>
                <div className="links">
                    <Link to="/">About me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/Contact">Contact me</Link>
                </div>

                <div className='toggleButton'>
                    <button onClick={() => setExpandNavbar((prev) => !prev)}>
                        <Reorder />
                    </button>
                </div>
            </div>

            <div className='dropdown'>
                <div className='openLinks'>
                    <Link to="/">About me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/Contact">Contact me</Link>
                </div>
            </div>


        </div>
    );
};

export default Navbar;