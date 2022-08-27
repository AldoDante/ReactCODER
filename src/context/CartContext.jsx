import { createContext, useContext, useState } from "react";

/* Creating a context with an empty array as the default value. */
export const CartContext = createContext([]);

/**
 * It returns the CartContext object
 */
export const useCartContext = () => useContext(CartContext);



const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);



 /**
  * If the product is already in the cart, increase the amount, otherwise add the product to the cart.
  */
  const addToCart = (prod) => {

    /* Finding the index of the product in the cartList array. */
    const indx = cartList.findIndex(product=>product.id===prod.id)

    /* Checking if the product is already in the cart, if it is, it increases the amount, otherwise it
    adds the product to the cart. */
    if (indx !== -1){

      cartList[indx].amount+= prod.amount
      setCartList([...cartList])

    } else {
      setCartList([...cartList, prod]);
    }
  }

  /**
   * Remove the item from the cartList array that has the same id as the id passed in as an argument.
   */
  const removeItem = (id) =>{
 
    setCartList(cartList.filter(prod=>prod.id!==id))

  }


  /**
   * When the clearCart function is called, the cartList array is set to an empty array.
   */
  const clearCart = ()=>{
    setCartList([])
  }

/**
 * The totalBuyout function returns the sum of the price of each product in the cartList multiplied by
 * the amount of each product in the cartList.
 * @returns The total price of all the products in the cart.
 */
const totalBuyout =()=>{
  return cartList.reduce((acumulatorPrice, prodObj)=> acumulatorPrice+=(prodObj.price*prodObj.amount), 0)
}

/**
 * The function totalAmount returns the sum of the amount property of each object in the cartList
 * array.
 * @returns The total amount of products in the cart.
 */
const totalAmount = ()=>{
  return cartList.reduce((contador, prodObjet)=>contador+=prodObjet.amount,0)
}
  return (
    <CartContext.Provider value={{ cartList , addToCart, clearCart, removeItem, totalBuyout, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider
