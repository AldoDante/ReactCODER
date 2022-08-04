import React from 'react'
import { Link } from 'react-router-dom'

const Inputcount = () => {
  return (
    <div className="d-flex">
    <div className="justify-content-center card w-25">
    <Link to='/'>
    <button className="btn btn-outline-dark">Unita mas!</button>
    </Link>
    <Link to='/cart'>
    <button className="btn btn-outline-dark" 
            onClick={()=>console.log('Carrito') } 
            >Finalizar compra
    </button>
    </Link>
    </div>
</div>
  )
}

export default Inputcount