import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Loading } from '../../Loading/Loading'
import NotFound from '../Notfound/NotFound'

/* A function that is called when the component is mounted. */
const ItemDetailContainer = () => {

  const [prod, setProd] = useState({}) /* Creating a state variable called prod and a function to update it called setProd. */
  
  const [loading, setLoading]= useState (true) /* Creating a state variable called loading and a function to update it called setLoading. */
  
  const {detailId}= useParams()/* Getting the id from the url. */


  /* A function that is called when the component is mounted. */
  useEffect(()=>{
    const db = getFirestore()
    const queryProduct = doc(db, 'products', detailId)
    getDoc(queryProduct)
    .then(resp => setProd({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
  },[detailId])


  return (
    <>
      <br/>
      {loading ? <Loading/>
            
      :  prod.name === undefined ? <NotFound/> : <ItemDetail  prod={prod}/>
      }   
      
    </>
  )
}

export default ItemDetailContainer