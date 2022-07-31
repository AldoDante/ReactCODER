import React from 'react'
import { Link } from 'react-router-dom'

const Inputcount = () => {
  return (
    
    <div>
    <Link to='/cart'>
    <button className="btn btn-outline-primary" 
            onClick={()=>console.log('Carrito') } 
            >Finalizar compra
    </button>
    </Link>
    </div>

  )
}

export default Inputcount