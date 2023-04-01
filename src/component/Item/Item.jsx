import './Item.css'
import { Link } from 'react-router-dom';
import React from 'react'


const Item = ({ info }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {info.name}
                </h2>
            </header>
            <picture>
                <img src={info.img} alt={info.name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${info.price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/detalle/${info.id}`} className='Option'>Ver detalle</Link>
                {/* <button onClick={() => navigate('/item')} className='Option'>Ver detalle</button> */}
            </footer>
        </article>
        // <Link to={`/detalle/${info.id}`} className='product'>
        //<img src={info.img} alt="" />
        //<p>{info.name}</p>
        //</Link>
    );
}

export default Item;