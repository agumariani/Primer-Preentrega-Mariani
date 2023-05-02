import { useState } from 'react'
import './Counter.css'

export const Counter = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }



    return (
        <div>
            <div>
                <button className='buttonDecrement' onClick={decrement}>-</button>
                <h4 className='quantity'>{quantity}</h4>
                <button className='buttonIncrement' onClick={increment}>+</button>
            </div>
            <div>
                <button className='buttonAdd' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
