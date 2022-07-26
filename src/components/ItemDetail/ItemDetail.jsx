import React from 'react'

const ItemDetail = ({prod}) => {

  return (
    <div className='row'>
      <div className='col'>
        <img src={prod.foto} />
      </div>

    </div>
  )
}

export default ItemDetail