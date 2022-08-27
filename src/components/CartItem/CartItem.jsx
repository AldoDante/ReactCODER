import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

/* A function that receives an item as a parameter and returns a card with the information of the item. */
const CartItem = ({ item }) => {
  /* Destructuring the removeItem function from the useCartContext hook. */
  const { removeItem } = useCartContext(); 

  return (
    <>
      <br />

      <ListGroup>
        <ListGroup.Item key={item.id}>
          <Row>
            <Col md={2}>
              <Image src={item.image} alt={item.name} fluid rounded />
            </Col>
            <Col md={2}>
              <h3>{item.name}</h3>
            </Col>
            <Col md={2}>
              <h5>Cantidad: {item.amount}</h5>
            </Col>
            <Col md={2}>
              <h5>Precio ${item.price}</h5>
            </Col>
            <Col md={2}>
              <h5>Sub-Total: ${item.price*item.amount}</h5>
            </Col>
            <Col md={2}>
            <button onClick={() => removeItem(item.id)} className="btn btn-outline-dark">Eliminar Producto</button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>      
    </>
  );
};

export default CartItem;
