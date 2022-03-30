import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Product.css';

const Product = ({ item }) => {
    return (
        <div className='product__container'>
            <div className='circle'></div>
            <img src={item.imageUrl} alt='Image' />
            <div className='product__pricing'>
                <h4>{item.name}</h4>
                <p>${item.price.current.value}</p>
            </div>
            <div className='product__info'>
                <div className='product__icon'>
                    <AiOutlineShoppingCart />
                </div>
            </div>
        </div>
    );
}

export default Product;