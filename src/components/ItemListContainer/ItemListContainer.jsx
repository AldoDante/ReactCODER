import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getFetch } from "../../helpers/getFetch";
// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(()=>{
    if (categoriaId) {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryFiltrada = query(queryCollection, where('categoria', '==', categoriaId))
        
        getDocs(queryFiltrada)
        .then(resp =>  setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally(() => setLoading(false))          
    } else {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then(resp =>  setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally(() => setLoading(false))            
    }
}, [categoriaId])


  const Loading = ()=>{
    return <h3>Now Loading...</h3>
  }

  return (
    <div>
      {saludo}

      {loading ? <Loading/> : <ItemList productos={productos} />}

      {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
    </div>
  );
};

export default ItemListContainer;




// useEffect(() => {
//   if (categoriaId) {
  //     getFetch()
  //       .then((respuesta) => setProductos(respuesta.filter(prod=>prod.categoria===categoriaId)))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   } else {
  //     getFetch()
  //       .then((respuesta) => setProductos(respuesta))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   }
  // }, [categoriaId]);

  // const onAdd = (cant) => {
  //   console.log(`La cantidad es: ${cant}`);
  // };