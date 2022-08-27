import { useCartContext } from '../../context/CartContext'
import  {FaShoppingCart} from 'react-icons/fa'

/**
 * It's a React component that renders a button with a shopping cart icon and a number inside the
 * button. The number is the total amount of items in the cart.
 */
const Cartwidget = () => {

  /* It's destructuring the `totalAmount` function from the `useCartContext` hook. */
  const {totalAmount} = useCartContext()
   
  return (
    <>
      <button id='boton-carrito'><FaShoppingCart  fontSize='40px'/>
      
        {/* It's a ternary operator. If the total amount is not equal to zero, then it will render the
        span with the total amount. Otherwise, it will render nothing. */}
        {totalAmount() !== 0 && <span style={{ fontSize: "30px" }}> {totalAmount()}</span>}
      </button>
    </>
  )
}

export default Cartwidget