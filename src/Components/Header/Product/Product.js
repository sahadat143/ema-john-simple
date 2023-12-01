import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt='' />;
            </div>
            <div>
                <h4 className='product-name' >{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <><small>Only {stock} left in stock - Oder soon</small></>
                <button className='my-button' 
                onClick={() => props.handleAddProduct(props.product)}
                >Add Your Card</button>
                {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}

            </div>

        </div>
    );
};

export default Product;