import "./CartWitget.css"
import React  from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";


export const CartWidget = () => {
    const {totalProduct} = useCartContext();

const navigate = useNavigate()



    return  (
        <div className='carrito' onClick={() => navigate('/cart')}>
            <h2 className='img__carrito'>🛒</h2>
            <span>{totalProduct ? totalProduct() : ''}</span>

            
        </div>
    )
}

export default CartWidget;