import React from 'react'
import { useState } from 'react'



/* A function that takes a parameter `saveOrder` and returns a form. The form has a state called
`buyerData` that is initialized with an object that has four properties: `email`, `name`, `phone`
and `email2`. */
const Form = ({saveOrder}) => {

    const [buyerData, setBuyerData] = useState({
        email:'', 
        name:'', 
        phone:'',
        email2:''
    })
    
    /**
     * When the user types in the input field, the value of the input field is set to the buyerData
     * state.
     */
    const handleChange = (e) => {
            
        setBuyerData({
            ...buyerData,
            [e.target.name]: e.target.value
        })
    }

    /* A function that is called when the form is submitted. It checks if the name, phone and email fields are empty. If
    it is, it will alert the user to fill it in. It also checks if the email fields match. If they
    don't, it will alert the user. If the name, phone and fields are not empty and the emails match, it will
    delete the `email2` property from the `buyerData` object and call the function `saveOrder` and
    pass the event and the buyerData object as parameters. It also prevents the default behavior of
    the form. */
    const handleSubmit = (e) => {  

      
      if (buyerData.name.length===0||buyerData.phone.length===0||buyerData.email.length===0) 
          alert('Debe completar todos los Campos')

      else if (buyerData.email !== buyerData.email2){
          alert('No coincide la direccion de Correo')
      }
      else {
                    
          delete buyerData.email2 
         
          saveOrder(e, buyerData) 

      }
      
      e.preventDefault() 
      
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Ingrese el nombre"
            /* Calling the `handleChange` function and passing the event as a parameter. It is also
            setting the value of the input field to the `buyerData.name` state. */
            onChange={handleChange}
            value={buyerData.name}
          />
        </div>
        <br/>
        <div className="form-group">
          <label>Telefono</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            placeholder="Teléfono"
           /* Calling the `handleChange` function and passing the event as a parameter. It is also
           setting the value of the input field to the `buyerData.phone` state. */
            onChange={handleChange}
            value={buyerData.phone}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            /* Calling the `handleChange` function and passing the event as a parameter. It is also
            setting the value of the input field to the `buyerData.email` state. */
            onChange={handleChange}
            value={buyerData.email}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Repetir Email</label>
          <input
            type="email"
            className="form-control"
            name="email2"
            placeholder="Enter email"
            /* Calling the `handleChange` function and passing the event as a parameter. It is also
            setting the value of the input field to the `buyerData.email2` state. */
            onChange={handleChange}
            value={buyerData.email2}
          />
        </div>
        <br/><br/>
        <button type="submit" className="btn btn-outline-light">
          Enviar Orden
        </button>
      </form>
    </>
  );
}

export default Form