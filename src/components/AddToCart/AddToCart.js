import Products from '../Products/Products';
import React, { useState } from 'react';

function AddToCart({inputV}) {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        inputV();   
    }

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            inputV();
        }
    }
    return (
        <div>
            <button onClick={increaseQuantity}>Add to Cart</button>
            <button onClick={decreaseQuantity}>Remove from Cart</button>
            <p>Quantity: {quantity}</p>
        </div>
    )
}

export default AddToCart;