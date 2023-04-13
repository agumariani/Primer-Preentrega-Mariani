import React from 'react'
import  {CartWidget}  from '../CartWidget/CartWidget'

export const NavBar = () => {

    return (
        <nav className='nav-bar'>
            <h3>Ecomerce</h3>
            <div>
                <button>Farmacia</button>
                <button>Perfumeria</button>
                <button>Electro</button>
            </div>
            
            <CartWidget/>

        </nav>
    )


}
