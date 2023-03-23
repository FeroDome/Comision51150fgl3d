function ItemDetail({ name, price, img, description }) {
    return (
        <div style={{ margin: 10 }}>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{ width: 100 }} />
            <h3>Precio: {price}</h3>
            <p>Descripcion: {description}</p>
        </div>
    );
}

export default ItemDetail;