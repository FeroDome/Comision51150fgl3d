import React, { useState, useContext } from "react";


export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    
    console.log('carrito: ', cart);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity} ]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act)=> prev + act.quantity * act.price, 0);
    }

    const totalProduct = () => cart.reduce ((acumulador, productActual) => acumulador + productActual.quantity, 0);

    const clearCart = ( ) => setCart([]);

    const isInCart = (id) => cart.some(product => product.id === id)

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));




    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProduct,
            cart,

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider