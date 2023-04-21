import "./Navbar.css"
import CartWidget from "../CartWitget/CartWitget";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../Firebase/config'



export const Navbar = () => {

    const [categories, setCategories] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(categoriesRef)
            .then(snapshot => {
                const categoriesAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data }
                })

                setCategories(categoriesAdapted)
            }).catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <div className="nav-container">

            <nav className="navbar">
                <Link className="navbar-logo" to="/">FGL 3D</Link>
                <div className="categories">
                    {
                        categories.map(cat => {
                            return (
                                <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
                            )
                        })
                    }

                    {/*<NavLink className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} to="/category/coleccionables" >Coleccionables</NavLink>

                    <NavLink className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} to="/category/mates" >Mates</NavLink>

                    <NavLink className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} to="/category/miniaturas" >Miniaturas</NavLink>
                    */}


                </div >
                {
                    user ? (
                        <CartWidget />
                    ) : (
                        <NavLink to='/login' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Login</NavLink>
                    )
                }

            </nav >

        </div >
    )
}

export default Navbar;