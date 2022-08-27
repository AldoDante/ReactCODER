import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useState } from "react"
import Form from "../Form/Form"
import { setOrder, updateStock } from "../../helpers/Helpers"
import CartList from '../CartList/CartList'
import { Card } from "react-bootstrap"
import CardHeader from 'react-bootstrap/esm/CardHeader'


/* A function that saves the order information to store in Firestore. */
const Cart = () => {

  /* Destructuring the cartList, clearCart and totalBuyout from the useCartContext hook. */
  const {cartList, clearCart, totalBuyout} = useCartContext()
  
  /* Setting the id state to an empty string. */
  const [id, setId] = useState ('')

  /* A function that saves the order information to store in Firestore. */
  const saveOrder = async (e, buyerData) => { 
    e.preventDefault()

    const order = {} /*empty order object*/
    order.buyer =  buyerData /*buyer state set by the form*/


    /* Creating a new array with the properties of interest (product, id, price) from the cartList
    array. */
    order.items = cartList.map(prod => { 
        return {
            product: prod.name,
            id: prod.id,
            price: prod.price
        }
    })

    order.date = new Date() /* Adding a date to the order. */
    order.total = totalBuyout() /* Adding the total price to the order. */
        
    setOrder(order) /* A function that saves the order information to store in Firestore. */
    .then(resp => setId(resp.id)) /* Setting the id of the order to show later. */
    
    updateStock(cartList, clearCart) /* Updating the stock of the items bought. */
}


  return (
      <>            
            <br/>


           
            {/* Checking if the id state is empty. If it is empty, it will not show the card. If it is
            not empty, it will show the card.*/}
            {id !== '' &&
            <div>
                <Card className="text-center mx-auto" style={{ width: '20rem' , borderRadius:"12px"}}>
                    <CardHeader style={{ backgroundColor: "#212529", color: "white"}}>¡COMPRA EXITOSA!</CardHeader>
                    <Card.Text>{`Su numero de orden es ${id}`}</Card.Text>
                </Card>
                <br/>
            </div> 
             }
            
            <br/>
            {/* Checking if the cartList array is empty. If it is empty, it will show a card with a
            message and a button to go to the shop. If it is not empty, it will show the cart. */}
            {cartList.length === 0 ? 

            <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                <CardHeader>CARRITO VACIO</CardHeader>
                <Link to="/">
                    <button className="btn btn-outline-dark">Ir a comprar</button>
                </Link>
            </Card>            
            :
            <div className='row'>
              <div className="col-8">
                <h1>CARRITO</h1>
                <CartList/>
                <br/>  
            
            <button className="btn btn-outline-dark" onClick={clearCart} >Vaciar el Carrito</button>
           
              </div>
              <div className="col-3 filters summary">
                
                <Card className="text-center mx-auto" style={{ width: '10rem', color:'#343a40' }}>
                    <CardHeader>TOTAL DE LA COMPRA</CardHeader>
                    <h3>${totalBuyout()}</h3>
                </Card>
                <br/>
               
                  {/* Passing the saveOrder function as a prop to the Form component. */}
                  <Form saveOrder={saveOrder} />
              </div>
                <br/>
                <br/>
                
            </div>
            }
            
        </>
    
  )
}

export default Cart