import { useEffect, useState } from "react"
import { getProductsById } from "../../catalogo/mockData"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = ()=> {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])
    

    return (
        <ItemDetail {...product}/>
    )
}

