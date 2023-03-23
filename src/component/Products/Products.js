import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import Item from "../Item/Item";

import "./Products.css";

const Products = () => {
    const [data, setData] = useState([]);
    const { buyProducts } = useContext(dataContext);

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    }, []);

    return data.map((product) => {
        return (
            <div className='card' key={product.id}>
                <img src={product.img} alt='img-product-card' />
                <h3>{product.name}</h3>
                <h4>{product.price}$</h4>
                <button onClick={() => buyProducts(product)}>Comprar</button>
                <button onClick={() => Item(product)}>Ver Descripcion</button>
            </div>
        );
    });
};

export default Products;
