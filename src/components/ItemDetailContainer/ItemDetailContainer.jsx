import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [prod, setProducto] = useState({})
  const [loading, setLoading]= useState (true)

  const {detalleId}= useParams()

  /* A hook that is called when the component is mounted. It is a function that is called when the
  component is mounted. */
  useEffect(()=>{
    const db = getFirestore()
    const queryProducto = doc(db, 'productos', detalleId)
    getDoc(queryProducto)
    .then(resp => setProducto({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
  },[detalleId])

  // useEffect(()=>{
  //   getFetch(detalleId)
  //   .then(resp=>setProducto(resp))
  // }, [])

  return (
    <div>
    
      <ItemDetail prod={prod}/>
    </div>
  )
}

export default ItemDetailContainer