import React, { useState, useContext } from 'react';
import { collection, query, where, getDocs, writeBatch, documentId, Timestamp, addDoc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig'
import { CartContext } from '../../Context/CartContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './checkout.css'

export const Checkout = () => {
    
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, clearCart, total} = useContext(CartContext);

    const createOrder = async ({name, phone, email }) => {
        setLoading(true)
        try{
            const objOrder={
                buyer:{
                    name,phone,email
                },
            
                items:cart,
                total: total(),
                date:Timestamp.fromDate(new Date())
            }
        
            const batch=writeBatch(db)
            const outOfStock=[]
            const ids= cart.map(prod=>prod.id)
            const ProductsRef=collection(db,'productos')
            const ProductsAddedFromFirestone= await getDocs(query(ProductsRef,where(documentId(),'in',ids)))
            const {docs}=ProductsAddedFromFirestone

            docs.forEach(doc=>{
                const dataDoc=doc.data()
                const stockDb=dataDoc.stock

                const productAddedToCart=cart.find(prod=>prod.id===doc.id)
                const prodQuantity=productAddedToCart?.stock

                if(stockDb>=prodQuantity){
                    batch.update(doc.ref,{stock:stockDb-prodQuantity})
                }else{
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })
            
            if(outOfStock.length===0){
                await batch.commit()

                const orderRef=collection(db,'pedidos')

                const orderAdded= await addDoc(orderRef,objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }
            else{
                console.error('Hay productos que se encuentran fuera de stock')
            }
        }catch(error){
            console.log(error)
        }
    }

    if(loading){
        return <h1>Se está generando su órden...</h1>
    }

    if(orderId){
        return <h1>El id de su orden es: <strong>{orderId}</strong> </h1>
    }


    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}