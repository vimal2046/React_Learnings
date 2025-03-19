import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchProducts } from "../redux/productSlice";


const ProductList = () => {
    const dispatch = useDispatch();
    //get data from redux store
    const {items, status, error} = useSelector((state) => state.products);

//fetch products when component mounts
    useEffect(() =>{
        dispatch(fetchProducts());
    }, [dispatch])
  return (
    <>
    <h3>Product Inventory</h3>
    {status === "loading" && <p>Loading Products...</p>}
    {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}
    {status === "succeeded" && (
        <ul>
            {items.map((product) => (
                <li key={product.id}>
                    <strong>{product.title} - ${product.price}</strong>
                </li>
            ))}
        </ul>
    ) }

    </>
  )
}

export default ProductList