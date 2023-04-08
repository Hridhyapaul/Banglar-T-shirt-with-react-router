import React from 'react';
import './Tshirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {_id, price, picture, name, gender} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;