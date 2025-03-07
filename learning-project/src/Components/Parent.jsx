import { PRODUCTS } from '../constants/products';
import React, { useState } from "react";
import Product from "./Product";
import "../index.css"

const Parent = () => {
    //initialization for selectedProducts and index
    const [selectedProducts, setSelectedProducts] = useState([]);//created empty array
    const [ index,setIndex]=useState(0);//init 0th index
    
    //function to run while event is triggered
    const addProduct = ()=> {
      {
        setSelectedProducts([...selectedProducts,PRODUCTS[index]]);
        setIndex(index+1);
      }
    }
  
    return(
      
       <div className='parent-container'>
        <h1>Products</h1>

        { selectedProducts.map((product, index) => (//map function to pass the values
            //returns the values to the child 
            
          <Product key={index} name = {product.name} price = {product.price} description = {product.description}/>
        ))}
       
        {(
            //event trigger while button is pressed
          <button className='button-container'onClick={addProduct} >
            Click to Add</button>
            )}
  
       </div>
        )
      
     
                      
  }

export default Parent