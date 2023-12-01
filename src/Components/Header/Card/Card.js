import React from 'react';

const Card = (props) => {
    const Card = props.card;
    console.log(Card);
    // const total = Card.reduce((total , prd) => total+ prd.price, 0) 
    let total = 0;
    for (let i = 0; i< Card.length; i++){
        const product = Card[i];
        total = total + product.price;
    }
    let Shipping = 0;
    if (total > 140){
        Shipping = 0;
    }
    else if (total > 210){
        Shipping = 30.99;
    }
    else if (total > 0){
        Shipping = 120.99;
    }
    const tex = (total / 10). toFixed(2);
    const grandTotal = (total + Shipping + Number(tex)).toFixed(2);
    
    return (
        <div>
            <h3>Oder Summery:</h3>
            <p>Items Odered: {Card.length} </p>
            <p>Total Price: {total}</p>
            <p><small>Shipping Cost: {Shipping}</small></p>
            <p><small>Text + Vat {tex} :</small></p>
            <p>Total Price: {grandTotal} </p>
        </div>
    );
};

export default Card;