import React, { useState } from 'react';
import fakeData from '../../../fakeData/products.json';
import './Shop.css';
import Product from '../Product/Product';
import Card from '../Card/Card';
const Shop = () => {
    const frist10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(frist10);
    const [card, setCard] = useState([]);

    const handleAddProduct = (product) => {
      const newCard = [...card, product];
      setCard(newCard);
    }
    return (
        <div className='shop-box'>
           <div className='products-box'>
            
                    {
                        products.map(pd => <Product 
                            handleAddProduct = {handleAddProduct}
                            product ={pd}>
                             </Product>)
                    }
                  
           </div>
           <div className='card-box'>
                    <Card card={card}></Card>
           </div>
        </div>
    );
};

export default Shop;