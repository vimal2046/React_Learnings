import React, { useState } from 'react'
import CustomerView from './customerView';

const CustomerAdd = () => {
   const [input, setInput] =  useState("");
   const [customers, setCustomers]= useState([]);
   
   const addCustomer =() =>{
     if(input){
        setCustomers((previousState)=>[...previousState, input])
        setInput(" ")
     }
   }
    console.log(customers)
  return (
    <>
    <div>
        <h3>Add New Customer</h3>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={addCustomer}>Add New Customer</button>
        <p>{input}</p>
    
    </div>
    <CustomerView customers={customers} />
    </>
  )
}

export default CustomerAdd