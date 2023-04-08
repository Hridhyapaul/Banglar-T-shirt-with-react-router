import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <h4>Please add some products</h4>
    }
    else {
        message = <h4>Thanks for buying our products</h4>
    }
    return (
        <div>
            <h3 className={`padding border-radius ${cart.length === 2 ? 'salmon' : 'orange'}`}>Order Summary: {cart.length}</h3>
            {
                cart.length < 5 ? <h4>Fokir marka lok</h4> : <h4>Aro kina lagbe</h4>
            }
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button></p>)
            }
            {
                cart.length === 5 && <h4>You are good</h4>
            }
        </div>
    );
};

export default Cart;

// Conditional Rendering:

// 1. use if/else condition for conditional rendering
// 2. use Ternary operator for conditional rendering
// 3. use Logical && for conditional rendering ( if the condition is true then the next thing will be displayed)
// 4. use Logical or for conditional rendering ( if the conditional is false then the next thing will be displayed)

// Conditional styles: