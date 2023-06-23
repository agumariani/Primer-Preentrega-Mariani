import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../cartItem/cartItem";


export const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity < 1) {
        return (
            <div>
                <h1>No tiene productos en el carrito</h1>
                <Link to='/' className='buton'>Productos</Link>
            </div>
        )        
    }

    
    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: {total()}</h3>
            {console.log(cart)}
            <button onClick={()=>clearCart} className="button">Limpiar carrito</button>
            <Link to='/checkout' className='button'>Checkout</Link>
        </div>
    )
}
