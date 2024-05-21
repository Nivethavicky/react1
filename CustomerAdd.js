import React, { useState } from 'react'
import CustomerView from './CustomerView';
import {addCustomer as addCustomerAction} from './Slices/customerSlice'
import { useDispatch } from 'react-redux';

function CustomerAdd() {
 const [input,setInput]=useState("")
 const dispatch= useDispatch();
 //const [customers,setCustomers]=useState([])

 function addCustomer(){
   if(input){
     //below line to send props using parent child relationship
    // setCustomers((previousState=>[...previousState,input]))
    //  to check input value gets added in array 
    //  console.log(customers)
    // aftering enter one value ,it should be empty
    dispatch(addCustomerAction(input))
    setInput(""); //<INPUT TAG value={input}
   }
 }
  return (
    <>
      <h3>Add New Customer</h3>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addCustomer}>Add</button> 
    {/* <CustomerView customers={customers}/> */}
    </>
  )
}

export default CustomerAdd