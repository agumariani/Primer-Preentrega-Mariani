import React from 'react'
import  {CartWidget}  from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {

    return (
        <nav className='nav-bar'>
                <Link to={'/'} className='logo'>
                    <h1>Farmacia</h1>
                </Link>
            <div className='nav'>
                <NavLink to={`/categoria/Medicamentos`} className={({isActive})=> isActive ? 'activeOption' : 'option'}>Medicamentos</NavLink>
                <NavLink to={`/categoria/Cuidado-personal`} className={({isActive})=> isActive ? 'activeOption' : 'option'}>Cuidado Personal</NavLink>
                <NavLink to={`/categoria/Suplementos`} className={({isActive})=> isActive ? 'activeOption' : 'option'}>Suplementos</NavLink>
                <CartWidget/>
            </div>
            

        </nav>
    )


}
