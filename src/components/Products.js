import React, { useEffect, useState } from 'react';
import { getData } from '../api';

const Products = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                // console.log(data);

                setList(data);
            })
    }, [])

    return (
        <div>
            {list.map((item) => {
                return (
                    <div>
                        <img src={item.products.imageUrl} alt />
                    </div>
                );
            })}
        </div>
    );
}

export default Products;