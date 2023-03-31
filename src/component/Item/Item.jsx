import './Item.css'
import { Link } from 'react-router-dom';
import React from 'react'


const Item = ({ info })=> {
    return(
        <Link to={`/detalle/${info.id}`} className='product'>
        <img src={info.img} alt="" />
        <p>{info.name}</p>
        </Link>
    );
}

export default Item;