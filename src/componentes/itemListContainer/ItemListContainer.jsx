import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../catalogo/mockData";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const {categoriaId} = useParams()

    useEffect(() => {

        const asyncFunc =categoriaId ? getProductsByCategory : getProducts

        asyncFunc(categoriaId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoriaId])


    return (

        <div className="item-list">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )


}