import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CardHeader from 'react-bootstrap/esm/CardHeader'


const Item = ({ prod }) => {
  return (
    <>
      <Card className="products">
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{`${prod.category} - ${prod.name}`}</Card.Title>
          <Card.Subtitle>{`${prod.category}`}</Card.Subtitle>
          <Card.Text>         
              Precio$ {`${prod.price}`}
              <br/>
              {/* It's a ternary operator. If the condition is true, it will render the first part,
              otherwise it will render the second part. */}
              {prod.stock !== 1 && <>Stock disponible {`${prod.stock}`} </>}         
          </Card.Text>
          {/* It's a ternary operator. If the condition is true, it will render the first part,
          otherwise it will render the second part. */}
          {prod.stock === 1? 
            <CardHeader>Sin Stock</CardHeader> 
            :
            <Link to={`/detail/${prod.id}`} >
            <button className="btn btn-outline-dark">COMPRAR</button>
            </Link>
          }       
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;


