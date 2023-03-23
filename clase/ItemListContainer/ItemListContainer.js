import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'
import { Link } from "react-router-dom"



const ItemListContainer = ({ greeting }) => {

    const [products, setProducts ] = useState ([])
    



    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])



    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                {
                    products.map(prod => {
                        return (
                            <div key={products.id}>
                                <h3>{products.name}</h3>

                                <Link to={`/item/${prod.id}`}>Ver Decripcion</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer;