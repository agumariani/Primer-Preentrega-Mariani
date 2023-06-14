import { useContext, useState } from "react"
import { Counter } from "../Counter/Counter"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

export const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) => {    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)


    const handdleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item={
            id, nombre, precio
        }

        addItem (item, quantity)
    }

    
    return (
        <article>
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p>
                    Categoria: {categoria}
                </p>
                <p>
                    Descripcion: {descripcion}
                </p>
                <p>
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <div>
                            <Link to='/' className="option">Seguir comprando</Link>
                            <Link to='/cart' className="option">Terminar Compra</Link>
                        </div>
                    ):(
                        <Counter initial={1} stock={stock} onAdd={handdleOnAdd}/>
                    )
                }
                
            </footer>
        </article>
        
    )
}
