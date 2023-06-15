import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import Spinner from "../../Spinner/Spinner";


export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {
        setLoading(true)


    const collectionRef = categoriaId
        ? query(collection(db,'productos'),where('categoria', '==', categoriaId))
        : collection(db,'productos')


        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc=>{
                    const data = doc.data()
                        return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
        },[categoriaId])




        if(loading){
            return <Spinner/>
        }
    
        if(products){
            return (

                <div className="item-list">
                    <h1>{greeting}</h1>
                    <ItemList products={products}/>
                </div>
            )
        }
    


}