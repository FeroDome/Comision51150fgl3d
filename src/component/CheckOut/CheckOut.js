import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../Firebase/config'
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import { useNotification } from '../notification/NotificationService'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState(false)
    const { cart, totalPrice, clearCart } = useContext(CartContext)


    const { setNotification } = useNotification()

    const navigate = useNavigate()

    const handleConfirm = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer:{
                    name: 'Fernando',
                    email: 'fernando@hotmail.com',
                    phone: '123456789',
                    address: 'mendoza 2020'
                },
                item: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
                total: totalPrice(),
            }

            const ids = cart.map((prod) => prod.id)

            const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedFromFirestore = await getDocs(productRef)

            const { docs } = productsAddedFromFirestore

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.quantity;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder);
                clearCart();
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate("/");
                }, 5000)

            } else {
                setNotification("error", "Hay productos que no tienen stock disponible")
            };
        } catch (error) {
            setNotification("error", "Hubo un error generando la orden")
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se esta generando su orden de compra...</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>

            {/*<form onConfirm={handleConfirm}/>*/}
            {orderId ? <h2>El id de su orden es: {orderId}</h2> : <button onClick={()=>handleConfirm()}>Generar orden</button>}

        </div>
    );
};

export default Checkout;