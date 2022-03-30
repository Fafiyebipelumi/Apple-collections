import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from './Product';

const Products = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        // getData()
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
                'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7'
            }
        };

        fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=8&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
            .then(response => response.json())
            .then(data => setList(data.products))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <div className='products__container'>
                <div className='side-left'></div>
                <h2>Our Products</h2>
            </div>
            <div className='products'>
                {list.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </div>
            <div className='products__button'>
                <button>View All</button>
            </div>
        </>
    );
}

export default Products;


// <div className='products__container' key={item.id} >
                //     <img src={item.imageUrl} alt='image' />
                //     <h4>{item.name}</h4>
                //     <p>${item.price.current.value}</p>
                // </div>s