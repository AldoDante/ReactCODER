import CartItem from "../CartItem/CartItem"
import { useCartContext } from "../../context/CartContext"

/* Importing the cartList array from the cart context and then mapping over it to create a CartItem
component for each item in the array. */
const CartList = () => {

    /* Destructuring the cartList array from the useCartContext hook. */
    const {cartList} = useCartContext()
    
    return (
        <>
            {/* Mapping over the cartList array and creating a CartItem component for each item in the
            array. */}
            {cartList.map( item => <CartItem key={item.id} item={item}/>)}
        </>
    )}

export default CartList