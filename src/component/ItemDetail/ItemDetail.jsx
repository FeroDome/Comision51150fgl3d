import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';

import React from "react";
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);

    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);

    }

    return (

        <div className="container">
            <div className="detail">
                <img className="detail__img" src={data.img} alt="" />
                <div className="content">
                    <h1>{data.name}</h1>
                    <h2>${data.price}</h2>
                    {
                        goToCart
                            ? <Link to='/cart'>Terminar Compra</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }

                </div>

            </div>
        </div>

    );
}

export default ItemDetail;