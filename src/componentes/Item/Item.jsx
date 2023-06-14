import { Link } from "react-router-dom"
import './style.css'


export const Item = ({ id, nombre, precio, stock, img }) => {
    return (
        <article className="card">
            <header className="">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="cardImg" />
            </picture>
            <section>
                <p>
                    Precio = ${precio}
                </p>
                <p>
                    Stock disponible = {stock}
                </p>
            </section>
            <footer className="cardFooter">
                <Link to={`/item/${id}`}>Ver detalle</Link>

            </footer>
        </article>
    )
}

