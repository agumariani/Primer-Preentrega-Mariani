import { Link } from "react-router-dom"

export const Item = ({ id, nombre, precio, stock, img }) => {
    return (
        <article className="CardItem">
            <header className="">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p>
                    Precio = ${precio}
                </p>
                <p>
                    Stock dispocible = {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`}>Ver detalle</Link>

            </footer>

        </article>
    )
}

