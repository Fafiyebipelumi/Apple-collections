// import { Link } from "react-router-dom";
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import './Navbar.css';
// import { useState } from "react";
// import { FaTimes, FaBars } from 'react-icons/fa';

// const Navbar = () => {

//     const [click, setClick] = useState(false);

//     const handleClick = () => setClick(!click);

//     const closeMobileMenu = () => setClick(false);

//     return (
//         <div className='navbar__container'>
//             <div className='nav__container'>
//                 <div className='center'>
//                     <Link to='/' onClick={closeMobileMenu}>SS Collections</Link>
//                 </div>
//                 <div className="menu-icon" onClick={handleClick}>
//                     {click ? <FaTimes /> : <FaBars />}
//                 </div>
//             </div>
//             <div className='nav__links'>
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     <div className='navbar__wrapper'>
//                         <div className='left'>
//                             <Link to='/shop' onClick={closeMobileMenu}>Shop</Link>
//                             <Link to='/about' onClick={closeMobileMenu}>About</Link>
//                         </div>
//                         <div className='right'>
//                             <Link to='/login' onClick={closeMobileMenu}>Login</Link>
//                             <Link to='/register' onClick={closeMobileMenu}>Register</Link>
//                             <AiOutlineShoppingCart onClick={closeMobileMenu} style={{ fontSize: 20 }} className='cart-logo' />
//                         </div>
//                     </div>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './button/Login';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-4">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/products">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink class="navbar-brand mx-auto fw-bold " href="/">SS Collections</NavLink>
                    <Login />
                </div>
            </nav>
        </>
    )
}

export default Navbar;  