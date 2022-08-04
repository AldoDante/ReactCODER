import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";



const Item = ({ prod }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.foto} />
        <Card.Body>
          <Card.Title>{`${prod.categoria} - ${prod.nombre}`}</Card.Title>
          <Card.Text>
            {/* <div>
              <p>{prod.descripcion}</p>
            </div> */}
            <div>
              <p>Precio$ {`${prod.precio}`}</p>
              <p>Stock disponible {`${prod.stock}`} </p>
            </div>
          </Card.Text>
   <Link to={`/detalle/${prod.id}`} >
   <Button variant="primary">Salud!</Button>
   </Link>
            
        
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
