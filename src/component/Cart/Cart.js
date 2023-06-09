import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";



const Cart = () => {
    const {cart, totalPrice } = useCartContext ();

    /*const order = {
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

    }*/

    if (cart.length === 0) {
        return (
            <>
            <p>No hay elementos en el Carrito</p>
            <Link to='/CheckOut'>Hacer Compras</Link>
            </>
        );
    }


    return (
        <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total: {totalPrice()}
            </p>
            <Link to='/checkout' >Finalizar compra</Link>
        </div>

    )
}

export default Cart;