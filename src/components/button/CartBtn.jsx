import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartBtn = () => {
    return (
        <>
            <NavLink to='/cart' className='btn btn-outline-primary ms-2' >
                <AiOutlineShoppingCart /> Cart(0)
            </NavLink>
        </>
    );
}

export default CartBtn;