import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetalContainer = () => {

  const [prod, setProducto] = useState({})
  const {detalleId}= useParams()

  useEffect(()=>{
    getFetch(detalleId)
    .then(resp=>setProducto(resp))
  }, [])

  return (
    <div>
      ItemDetalContainer
      <ItemDetail prod={prod}/>
    </div>
  )
}

export default ItemDetalContainer