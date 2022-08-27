import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Inputcount from "../InputCount/Inputcount";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ prod }) => {
 /* A state that is used to switch between the ItemCount and Inputcount components. */
  const [btnSwitch, setBtnSwitch] = useState(true);

  /* Destructuring the addToCart function from the useCartContext hook. */
  const{ addToCart } = useCartContext()

 
  /**
   * OnAdd is a function that takes an amount as an argument and returns a function that adds the
   * product to the cart and sets the button switch to false.
   */
  const onAdd = (amount) => {
    addToCart({...prod, amount: amount})
    setBtnSwitch(false);
  };

  return (
    <>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <img src={prod.image} alt="foto" height="300" width="400" />
          </div>
          <div className="col">        
            <h3>{prod.name}</h3>
            <>Descripcion: {prod.description}</ >
            <h3>Precio $ {prod.price}</h3>
          </div>
        </div>
      </div>
      <div className="col">
        {btnSwitch ? 
          <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
         : 
          <Inputcount />
        }
      </div>
    </div>
    </>
  );
};

export default ItemDetail;
