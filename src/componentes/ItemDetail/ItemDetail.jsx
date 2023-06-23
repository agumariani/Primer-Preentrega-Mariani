import { useContext, useState } from "react"
import { Counter } from "../Counter/Counter"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import './ItemDetail.css'

export const ItemDetail = ({ id, nombre, img, categoria, descripcion, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)


    const handdleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }


    return (
        <div className="container">
            <article className="item">
                <header className="nombreProducto">
                    <h2>
                        {nombre}
                    </h2>
                </header>
                <picture className="imgProducto">
                    <img src={img} alt={nombre} className="itemImg" />
                </picture>
                <section className="cuerpoInformacion">
                    <p className="categoria">
                        Categoria: {categoria}
                    </p>
                    <p className="descripcion">
                        Descripcion: {descripcion}
                    </p>
                    <p className="precio">
                        Precio: ${precio}
                    </p>
                </section>
                <footer className="footerOpciones">
                    {
                        quantityAdded > 0 ? (
                            <div>
                                <Link to='/' className="option">Seguir comprando</Link>
                                <Link to='/cart' className="option">Terminar Compra</Link>
                            </div>
                        ) : (
                            <Counter initial={1} stock={stock} onAdd={handdleOnAdd} />
                        )
                    }

                </footer>
            </article>
        </div>
    )
}
