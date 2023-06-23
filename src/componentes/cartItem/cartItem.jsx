import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import './cartItem.css'

export const CartItem = ({nombre, precio, quantity, id, img}) => {

    const {removeItem} = useContext (CartContext)


    return (
        <div className='containerPrincipal'>
            <section className='cartitem'>
            <div>
                <h4>{nombre}</h4>
                <img src={img} alt={nombre}/>
            </div>
            <div>
                <div>Precio: {precio}</div>
                <div>Cantidad: {quantity}</div>        
                <div>Subtotal: {precio*quantity}</div>    
            </div>
                <button onClick={()=> removeItem(id)} className='boton'>Eliminar item</button>
            </section>
        </div>
    )
}

