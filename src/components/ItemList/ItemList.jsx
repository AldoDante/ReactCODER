import React from "react";
import Item from '../Item/Item'

/* A function that takes in a prop called products and returns a div with a flexbox style. It also maps
over the products prop and returns an Item component for each product. */
const ItemList = ({ products }) => {
  return (
    <>
    <div style={ { 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }}>
        {
            products.map( prod => <Item key={ prod.id } prod={prod} /> )
        } 
    </div>
    </>
  )
}

export default ItemList
