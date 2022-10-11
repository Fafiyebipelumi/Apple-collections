import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import './ProductDetails.css';

const ProductDetail = () => {

    const { id } = useParams();
    const [name, setName] = useState([]);
    const [infos, setInfos] = useState([])
    const [images, setImages] = useState([])
    const [gender, setGender] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7',
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            }
        }

        fetch(`https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`, options)
            .then(response => response.json())
            .then(data => {
                // console.log(data.description);
                setName(data.name);
                setInfos(data.description)
                setImages(data.media.images)
                setGender(data.gender)
            })
            .catch(err => {
                console.error(err)
            });
    }, [id])

    return (
        <div className='details'>
            <div className='details-wrapper'>
                <h5>{name}</h5>
                <p>{gender}</p>
            </div>
            <div className='details-container'>
                <div>
                    {images.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={image.url} alt='Clothes' width={100} height={100} />
                            </div>
                        )
                    })}
                </div>
                <div>
                    {parse(infos)}
                </div>
            </div>
            {/* {details.map((detail, index) => {
                return (
                    <div>
                        <p>{detail.title}</p>
                    </div>
                )
            })} */}
        </div>
    );
}

export default ProductDetail;