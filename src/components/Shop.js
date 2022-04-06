// import React from 'react';

// const Shop = () => {

//     // const [container, setContainer] = useState([]);

//     // useEffect(() => {
//     //     const options = {
//     //         method: 'GET',
//     //         headers: {
//     //             'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
//     //             'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7'
//     //         }
//     //     };

//     //     fetch('https://asos2.p.rapidapi.com/products/v3/list-similarities?id=9851612&store=US&sizeSchema=US&currency=USD&lang=en-US', options)
//     //         .then((response) => {
//     //             return response.json()
//     //         })
//     //         .then((data) => {
//     //             setContainer(data)
//     //         })
//     //         .catch((err) => {
//     //             console.error(err)
//     //         })
//     // }, [])

//     // useEffect(() => {
//     //     // getData()
//     //     const options = {
//     //         method: 'GET',
//     //         headers: {
//     //             'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
//     //             'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7'
//     //         }
//     //     };

//     //     fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=8&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
//     //         .then(response => response.json())
//     //         .then(data => setList(data.products))
//     //         .catch(err => console.error(err));
//     // }, [])

//     return (
//         <>
//             <h2 className='text-center mb-3'>Shop Now</h2>
//             <hr />
//         </>
//     );
// }

// export default Shop;


import React, { useEffect, useState } from 'react';
import './Product.css';
import './Products.css';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Shop = () => {

    const [container, setContainer] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
                'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7'
            }
        };
        const URL = `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`

        fetch(URL, options)
            .then(response => response.json())
            .then(data => setContainer(data.products))
            .catch(err => console.error(err));

    }, [])

    return (
        <>
            <h2 className='text-center mb-5'>Shop Now</h2>
            <hr />
            {container.map((item) => {
                return (
                    <div className='products__container'>
                        <div className='product__container'>
                            <div className='circle'></div>
                            <img src={item.imageUrl} alt={item.name} />
                            <div className='product__pricing'>
                                <h4>{item.name}</h4>
                                <p>{item.price.current.text}</p>
                            </div>
                            <div className='product__info'>
                                <div className='product__icon'>
                                    <NavLink to={`product/${item.id}`}>
                                        <AiOutlineShoppingCart />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>
    );
}

export default Shop;