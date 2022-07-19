import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({saludo}) => {
  const onAdd = (cant) =>{
    console.log(`La cantidad es: ${cant}`)
  }
  return (
    <div >
      {saludo}
      <ItemCount initial={1} stock={15} onAdd={onAdd} />  
    </div>
    
  )
}

export default ItemListContainer