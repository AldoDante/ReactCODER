import React from 'react'
import { useCartContext } from '../../context/CartContext'

const Cart = () => {

  const {cartList, clearCart, removeItem} = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map(item=>(
         <li key={item.id}>
          <div className="w-25 d-flex">
            <img src={item.foto} alt="Foto" className='w-50'/>
            Nombre: {item.nombre} Cantidad: {item.cantidad} Precio: ${item.precio*item.cantidad}
          </div>
          <button onClick={removeItem}>Eliminar</button>
         </li> 
          ))}
          
      </ul>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart