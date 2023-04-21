import React  from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";


export const CartWidget = () => {
    const {totalProduct} = useCartContext();

const navigate = useNavigate()



    return  (
        <button className="seeCarrito" onClick={() => navigate('/cart')}>
            <h2>🛒</h2>
            <span>{totalProduct ? totalProduct() : ''}</span>

            
        </button>
    )
}

export default CartWidget