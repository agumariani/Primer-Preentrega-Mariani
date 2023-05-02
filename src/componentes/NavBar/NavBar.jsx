import React from 'react'
import  {CartWidget}  from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {

    return (
        <nav className='nav-bar'>
            <Link to={'/'}>
                <h3>Farmacia</h3>
            </Link>
            <div>
                <NavLink to={`/categoria/Medicamentos`} className={({isActive})=> isActive ? 'activeOption' : 'option'}>Medicamentos</NavLink>
                <NavLink to={`/categoria/Cuidado-personal`} className={({isActive})=> isActive ? 'activeOption' : 'option'}>Cuidado Personal</NavLink>
                <NavLink to={`/categoria/Suplementos`} className={({isActive})=> isActive ? 'activeOption' : 'option'}>Suplementos</NavLink>
            </div>
            
            <CartWidget/>

        </nav>
    )


}
