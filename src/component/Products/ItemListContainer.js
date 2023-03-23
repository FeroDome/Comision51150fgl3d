import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";


import "./ItemListContainer.css";



const Figura = [
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
    }
    ];
    
    const ItemListContainer = () => {
    
    
        const [data, setData] = useState({});
    
        const {categoryId} = useParams();
    
        useEffect(() => {
            const getData = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(Figura);
                }, 3000);
            });
            if (categoryId){
                getData.then(res => setData(res.filter(Coleccionables => Coleccionables.category === categoryId)));
            } else {
                getData.then(res => setData(res))
            }
    
            getData.then(res => setData(res));
        },[categoryId])

        return (

            <ItemDetailContainer data={data} />
    
        )
    }

export default ItemListContainer;
