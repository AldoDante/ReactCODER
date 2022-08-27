import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"



/* Exporting a function that updates the stock of the products in the database. */
export const updateStock = async (cartList, clearCart) => {

    const db = getFirestore()

    const queryCollectionStock = collection(db, 'products') /* Target collection. */

    const queryUpdateStock = query( //Filter for request
            queryCollectionStock, where( documentId(), 'in', cartList.map(it => it.id)) /* Brings ids than match the ones in the cart. */
    )

    const batch = writeBatch(db) /* Allows many actions at a time. */

    await getDocs(queryUpdateStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, { /* Substracts the amount in the cart to the current stock of each item
        stock : res.data().stock - cartList.find(item => item.id === res.id).amount. */
    })))
    .catch(err => console.log(err)) /* Catches any psoible errors with the fetch. */
    .finally(clearCart()) /* Resets the cart. */

    batch.commit() /* Executes the batch. */

}

export const setOrder = (order) =>{ /*Takes the order state as a parameter. */
        
    const db = getFirestore()
    const queryOrders = collection(db, 'orders') /* Target collection. */

return (addDoc(queryOrders, order)) /* Returns this function which adds the order as a document in the orders collection .*/
}

