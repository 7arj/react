import { useContext } from "react";
import CartContext from "../../context/CartContext";
function AddToCart({ product }) {
    console.log("add to cart", product.id)
    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    function increase() {
        //dispatch({type: "INCREASE", payload: product})
    }
    function decrease() {
      //  dispatch({type: "DECREASE", payload: product})
    }
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>

            </div>
        )
    }

}

export default AddToCart;


