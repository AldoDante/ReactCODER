import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch()
      .then((respuesta) => setProductos(respuesta))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const onAdd = (cant) => {
    console.log(`La cantidad es: ${cant}`);
  };

  return (
    <div>
      {saludo}

      {loading ? <h3>Now Loading...</h3> : <ItemList productos={productos} />}

      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
