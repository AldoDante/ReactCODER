import { useGetProductsFirestore } from "../../hooks/useGetProductsFirebase";
import { Loading } from "../../Loading/Loading";
import ItemList from "../ItemList/ItemList";



/* A function that takes a parameter called greeting. */
const ItemListContainer = ({ greeting }) => {
  
  /* Destructuring the array returned by the hook. */
  const [products, loading] = useGetProductsFirestore()
    

  return (
    <>
      <div className="productContainer">
      <br/>
        <h3>{ greeting } </h3>
          <br/>             
            { loading ? 
                <Loading />
                : 
                <ItemList products={products} />
            }  
      </div> 
    </>
    
)
}

export default ItemListContainer;
