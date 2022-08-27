import { useState } from "react";

/* A React component that is used to count the number of items in the cart. */
const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  
  /**
   * If the count is less than the stock, then add one to the count, otherwise alert the user that
   * there is not enough stock.
   */
  const handleAdd = () => {
    count < stock ? setCount(count + 1) : alert(`No hay stock suficiente: ${stock}`)
  };
 /**
  * If the count is greater than the initial value, then set the count to the count minus 1.
  */
  const handleSubs = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

 /**
  * If the count is less than the stock, then add the count to the cart.
  */
  const handleAddToCart = () => {
    if (count < stock) {
     
      onAdd(count);

    }
  };

  return (
    <>
    <div className="d-flex">
      <div className="justify-content-center card w-25">
        <label>{count}</label>
        <br />
        <button className="btn btn-outline-dark" onClick={handleAdd}>
          {" "}
          +{" "}
        </button>
        <button className="btn btn-outline-dark" onClick={handleSubs}>
          {" "}
          -{" "}
        </button>
        <button className="btn btn-outline-dark" onClick={handleAddToCart}>
          Agregar Carrito
        </button>
      </div>
    </div>
    </>
  );
};

export default ItemCount;


