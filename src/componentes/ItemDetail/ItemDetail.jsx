import { Counter } from "../Counter/Counter"

export const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) => {    
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
                <Counter initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada= ', quantity)}/>
            </footer>
        </article>
        
    )
    console.log(`${nombre}, ${categoria}`)
}
