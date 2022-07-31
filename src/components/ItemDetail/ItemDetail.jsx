import React, { useState } from "react";
import Inputcount from "../InputCount/Inputcount";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ prod }) => {
  const [btnSwitch, setBtnSwitch] = useState(true);
  const onAdd = (cant) => {
    console.log(`La cantidad es: ${cant}`);
    setBtnSwitch(false);
  };

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
        {btnSwitch ? 
          <ItemCount initial={1} stock={10} onAdd={onAdd} />
         : 
          <Inputcount />
        }
      </div>
    </div>
  );
};

export default ItemDetail;
