import React, { useContext } from 'react'
import cart from './assets/cart.svg'
import { CartContext } from '../../Context/CartContext'
import { NavLink } from 'react-router-dom'

export const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return(

        <NavLink to='/cart' className='cartWidget' style={{display:totalQuantity()>=0?'block':'none'}}>
            <img src={cart} alt='Cart-Icon'/>
            {totalQuantity()}
        </NavLink>

    )
}


