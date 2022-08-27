import React from "react";
import { Link } from "react-router-dom";

/**
 * It renders a div with two buttons, one of which links to the home page and the other to the cart
 * page.
 * @returns A React component.
 */
const Inputcount = () => {
  return (
    <>
      <div className="d-flex">
        <div className="justify-content-center card w-25">
          <Link to="/">
            <button className="btn btn-outline-dark">Seguir Comprando</button>
          </Link>
          <Link to="/cart">
            <button className="btn btn-outline-dark">Finalizar compra</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Inputcount;
