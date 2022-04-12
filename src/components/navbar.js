import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='topbar' id="topbar">
                <ul className='top-bar'>
                    <li className='nav-list'>
                        <a href='#'>Home</a>
                    </li>
                    <li className='nav-list'>
                        <a href='#'>Register</a>
                    </li>
                    <li className='nav-list'>
                        <a href='#'>Login</a>
                    </li>
                    <li className='nav-list'>

                        <Link to={'/cart'}><i class="fas fa-shopping-cart"></i> Cart </Link>

                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar;