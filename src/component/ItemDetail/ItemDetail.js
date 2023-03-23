

function ItemDetail({ data }) {
    return (
        <div>
            <h2>Articulo</h2>

            <h3>Precio: {data}</h3>
            <p>Descripcion: {data}</p>
        </div>
    );
}

export default ItemDetail;