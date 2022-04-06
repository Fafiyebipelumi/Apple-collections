import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const { id } = useParams();

    return (
        <h2>Product - {id}</h2>
    );
}

export default ProductDetail;