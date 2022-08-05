import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);



const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);



  const addToCart = (prod) => {

    const indx = cartList.findIndex(producto=>producto.id===prod.id)

    if (indx !== -1){

      cartList[indx].cantidad+= prod.cantidad
      setCartList([...cartList])

    } else {
      setCartList([...cartList, prod]);
    }
  }

const removeItem = (id) =>{
 
  setCartList(cartList.filter(prod=>prod.id!==id))


}


  const clearCart = ()=>{
  setCartList([])
}

const totalCompra =()=>{
  return cartList.reduce((acumuladorPrecio, prodObj)=> acumuladorPrecio+=(prodObj.precio*prodObj.cantidad), 0)
}

const totalCantidad = ()=>{
  return cartList.reduce((contador, prodObjet)=>contador+=prodObjet.cantidad,0)
}
  return (
    <CartContext.Provider value={{ cartList , addToCart, clearCart, removeItem, totalCompra, totalCantidad }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider
