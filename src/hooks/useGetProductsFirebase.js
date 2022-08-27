import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

/**
 * It's a custom hook that returns an array of products from Firestore.
 */
export const useGetProductsFirestore = () => {

    const [ loading, setLoading ] = useState(true)
    const [ products, setProducts ] = useState([])  
    
    const { categoryId } = useParams()   
    
    useEffect(()=>{          
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        
        const queryCollectionFilter = categoryId ?  query(queryCollection, where('category', '==', categoryId)) : queryCollection 

        getDocs(queryCollectionFilter)
        .then(resp =>  setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally(() => setLoading(false))  
    }, [categoryId])

    return [products, loading]
}
