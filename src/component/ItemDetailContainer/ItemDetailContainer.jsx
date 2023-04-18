import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { detalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', 'detalleId');
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))

    }, [])


    return (
        <div className="ItemDetailContainer">
            <ItemDetail data={data} />
        </div>
    );
}

export default ItemDetailContainer;