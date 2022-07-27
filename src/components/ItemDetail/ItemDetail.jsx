import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ prod }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <img src={prod.foto} alt="foto" height="300" width="400" />
          </div>
          <div className="col">
            {/* <h2>{prod.categoria}</h2> */}
            <h3>{prod.nombre}</h3>
            <p>Descripcion: {prod.descripcion}</p>
            <h3>Precio $ {prod.precio}</h3>
          </div>
        </div>
      </div>
      <div className="col">
        <ItemCount/>
      </div>
    </div>
  );
};

export default ItemDetail;
