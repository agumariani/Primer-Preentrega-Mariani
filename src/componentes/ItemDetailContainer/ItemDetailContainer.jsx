import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import Spinner from "../../Spinner/Spinner"



export const ItemDetailContainer = ()=> {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
            setLoading(false)
            })
    }, [itemId])
    

    if(loading){
        return <Spinner/>
    }

    if(products){
        return (
            <ItemDetail {...product}/>
        )
    }

    
}

