import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const Cart = () => {
    const {cart, totalPrice } = useCartContext ();

    const order = {
        buyer:{
            name: 'Fernando',
            email: 'fernando@hotmail.com',
            phone: '123456789',
            address: 'mendoza 2020'
        },
        item: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderColection = collection(db, 'orders');
        addDoc(orderColection, order)
        .then(({id}) => console.log(id)) 

    }





    if (cart.lenght === 0) {
        return (
            <>
            <p>No hay elementos en el Carrito</p>
            <Link to='/'>Hacer Compras</Link>
            </>
        );
    }


    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir Compra</button>
        </>

    )
}

export default Cart;