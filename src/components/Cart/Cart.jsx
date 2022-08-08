import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const Cart = () => {

  const {cartList, clearCart, removeItem, totalCompra} = useCartContext()

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
          <button onClick={()=>removeItem(item.id)}>Eliminar</button>
         </li> 
          ))}
          
      </ul>
      <div>
        <h4>{totalCompra()!==0 &&`Total de la Compra: ${totalCompra()}`}</h4>
        <h4>{totalCompra()===0 &&`Sin Productos`}</h4>
        <Link to="/" >
        <h4>{totalCompra()===0 &&`Volver al Menu`}</h4>
        </Link>
      </div>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart