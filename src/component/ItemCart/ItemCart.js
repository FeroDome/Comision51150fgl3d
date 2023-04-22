import React from 'react'
import './ItemCart.css';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({product: {id, img, name, quantity, price}}) => {
const {removeProduct} = useCartContext();

    return (
        <div className='ItemCart'>
            <img src={img} alt={name}/>
            <div>
                <p>Titulo: {name}</p>
                <p>Cantidad: {quantity}</p>
                <p>Precio U.: {price}</p>
                <p>Subtotal: {quantity * price}</p>
                <button onClick={() => removeProduct(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;