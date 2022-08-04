import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);



  const addToCart = (prod) => {

  if (cartList.find(item=>item.id===prod.id)) {
    
    for(const item in cartList){
      cartList[item].cantidad += prod.cantidad
    }

  } else {
    setCartList([...cartList, prod]);
  }

  
};

const removeItem = (prod) =>{
 
  
  const indice = cartList.indexOf(prod)
  cartList.splice(indice, 1)
  console.log(cartList)
  setCartList([...cartList])

}


  const clearCart = ()=>{
  setCartList([])
}

  return (
    <CartContext.Provider value={{ cartList , addToCart, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider
