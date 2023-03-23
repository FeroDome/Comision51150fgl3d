import { Link } from "react-router-dom"

const Item = ({ id, name, price }) => {
    return (
        <div>
            <Link to={`/detalle/${info.id}`} >ver detalle</Link>
        </div>
    )
}

export default Item