import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner"
import Title from "../Title/Title";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');

        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [categoryId])


    return (
        <>
            <Banner />
            <Title greeting={texto} />
            <ItemList data={data} />
        </>
    );
}


export default ItemListContainer;