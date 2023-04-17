import React  from "react";
import { useCartContext } from "../../Context/CartContext";


export const CartWidget = () => {
const {totalProduct} = useCartContext();

    return  (
        <div>
            <h2 className="seeCarrito">🛒</h2>
            <span>{totalProduct() ||''}</span>
            
        </div>
    )
}

export default CartWidget