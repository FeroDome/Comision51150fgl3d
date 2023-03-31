import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner"
import Title from "../Title/Title";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const products = [
    {
        "id": 1,
        "category": "Coleccionable",
        "name": "Spawn Prey",
        "author": "Prey Studio",
        "price": 10000,
        "img": "https://rabbithole.cl/wp-content/uploads/2021/05/206184196_509949957004695_5713717791487007872_n.jpg",
        "quanty": 2
    },
    {
        "id": 2,
        "category": "Mates",
        "name": "Mate Seleccion",
        "author": "FGL 3D",
        "price": 2500,
        "img": "https://files.cults3d.com/uploaders/17639623/illustration-file/5fa5e103-aabd-476e-a333-c63e5c69490f/1-MATE-ARGENTINA-CAMPEON.png",
        "quanty": 5
    },
    {
        "id": 3,
        "name": "Miniatura Warhammer",
        "category": "Miniaturas",
        "author": "Game Workshop",
        "price": 27,
        "img": "https://www.warhammer-community.com/wp-content/uploads/2020/05/3ZyzN4x4DNb8eI4U.png",
        "quanty": 1
    },
];

export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
    });
    if (categoryId) {
        getData.then(res => setData(res.filter(product => product.category === categoryId)));
    } else {
        getData.then(res => setData(res))
    }
    getData.then(res => setData(res));

}, [categoryId])

const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
}
return (
    <>
        <Banner />
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
    </>
);
}


export default ItemListContainer;