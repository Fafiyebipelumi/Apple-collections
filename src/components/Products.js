import React, { useEffect, useState } from 'react';
// import { getData } from '../api';

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
        <div>
            {list.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.imageUrl} alt='image' />
                        <p>{item.name}</p>
                        <p>${item.price.current.value}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;