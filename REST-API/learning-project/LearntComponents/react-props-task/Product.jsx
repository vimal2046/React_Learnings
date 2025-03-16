import React from "react";


const Product = ({ name, price, description }) => {
  return (
    //display card
    <div className="display-card">
      <h2><strong>Name:</strong>{name}</h2>
      <p><strong>Price:</strong> Rs.{price}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};

export default Product;
