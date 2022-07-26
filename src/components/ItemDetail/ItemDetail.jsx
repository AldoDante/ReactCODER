import React from "react";

const ItemDetail = ({ prod }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <img src={prod.foto} alt="foto" />
          </div>
          <div className="col">
            <h2>{prod.nombre}nombre</h2>
            <h3>{prod.categoria}categoria</h3>
            <h3>{prod.precio}precio</h3>
          </div>
        </div>
      </div>
      <div className="col">Counter</div>
    </div>
  );
};

export default ItemDetail;
