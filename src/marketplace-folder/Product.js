import React from 'react'
import './Product.css'

function Product({src, price, title, loc}) {
    return (
        <div className="product">
            <img src={src} alt=""/>
            <div className="product__info">
                <h2>{price}</h2>
                <h4>{title}</h4>
                <h5>{loc}</h5>
            </div>
        </div>
    )
}

export default Product
