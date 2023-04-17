import React from 'react'
import './ItemCart.css';
import Button from '../Button/Button';
import { useCartContext } from '../../Context/CartContext';

const ItemCart = ({product}) => {
const {removeProduct} = useCartContext();

    return (
        <div className='ItemCart'>
            <img src={product.img} alt={product.name}/>
            <div>
                <p>Titulo: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio U.: {product.price}</p>
                <p>Subtotal: {product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;