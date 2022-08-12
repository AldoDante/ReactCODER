import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useState } from "react"


const Cart = () => {

  const {cartList, clearCart, removeItem, totalCompra} = useCartContext()
  const [id, setId] = useState ('')

  const saveOrder = () =>{
    const orderDate = new Date()
    const order = {}
    order.buyer = {name:'Aldo', phone: '388497884', email:'dante@gmail.com' }

    order.item = cartList.map(prod=>{
      return{
        id: prod.id,
        product: prod.nombre,
        price: prod.precio
      }
    })
    order.total = totalCompra()
    order.date = orderDate
    
    const db = getFirestore()
    const queryOrders = collection(db, 'orders')
    addDoc(queryOrders, order)
    .then(resp => setId(resp.id))
    .catch(err => console.log(err))
    .finally(()=> clearCart())

    
  }

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
        <h3>{totalCompra()===0 && `Su Compra fue procesada con el ID:  ${id}`}</h3>

        <Link to="/" >
        <h4>{totalCompra()===0 &&`Volver al Menu`}</h4>
        </Link>
      </div>
      <div>
        {totalCompra()!==0 && <button onClick={saveOrder} >Comprar</button>}
      </div>
        {totalCompra()!==0 && <button onClick={clearCart}>Vaciar Carrito</button>}
    </div>
  )
}

export default Cart