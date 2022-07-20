import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ prod }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.foto} />
        <Card.Body>
          <Card.Title>{`${prod.categoria} - ${prod.nombre}`}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <div>
                <p>Precio$ {`${prod.precio}`}</p>  
                <p>Stock disponible {`${prod.stock}`} </p>
            </div>
            
          </Card.Text>
          <Button variant="primary">Salud!</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
