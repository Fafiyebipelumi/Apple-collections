import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.css';
import { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <div className='navbar__container'>
            <div className='nav__container'>
                <div className='center'>
                    <Link to='/' onClick={closeMobileMenu}>SS Collections</Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            <div className='nav__links'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <div className='navbar__wrapper'>
                        <div className='left'>
                            <Link to='/shop' onClick={closeMobileMenu}>Shop</Link>
                            <Link to='/about' onClick={closeMobileMenu}>About</Link>
                        </div>
                        <div className='right'>
                            <Link to='/login' onClick={closeMobileMenu}>Login</Link>
                            <Link to='/register' onClick={closeMobileMenu}>Register</Link>
                            <AiOutlineShoppingCart onClick={closeMobileMenu} style={{ fontSize: 20 }} className='cart-logo' />
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;