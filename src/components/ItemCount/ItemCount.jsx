import { useState } from 'react'

const ItemCount = ({initial=1, stock=10, onAdd}) => {
  const [count, setCount]= useState(1)

  const handleAdd = ()=> {
    if(count < stock){
    setCount (count + 1)
  }
}
  const handleSubs = ()=> {
    if(count > 1){
    setCount (count - 1)
  }
}
  return (
    <div className="d-flex">
      <div className="justify-content-center card w-25">
        <label>{ count }</label>
        <br/>
        <button className='btn btn-outline-dark' onClick={handleAdd}> + </button>
        <button className='btn btn-outline-dark' onClick={handleSubs}> - </button>
        <button className='btn btn-outline-dark' onClick={()=>onAdd(count)}> Agregar Carrito </button>
      </div>
    </div>
  )
}

export default ItemCount












// import {useState} from 'react'

// const ItemCount = ({initial=1, stock=10, onAdd}) => {
//   const [count, setCount] = useState(1)
//   const handleAdd = () =>{
//     if (count<stock){
//       setCount(count +1)
//     }
//   }
//   const handleSubtract = () =>{
//     if (count>stock){
//       setCount(count -1)
//     }
//   return (
//     <div className= "card w-25">
//       <label>{ count }</label>
//       <button className="" onClick={handleAdd}>Agregar</button>
//       <button className="" onClick={handleSubtract}>Quitar</button>
//       <button className="" onClick={()=> onAdd(count)}>Agregar Carrito</button>
//     </div>
//   )
// }
// }
// export default ItemCount