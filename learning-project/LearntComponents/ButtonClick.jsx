import React from "react";

const Events = (props) => {
  const func = () => {
    document.getElementById("para").innerHTML = props.name;
  };

  return (
    <>
      <button onClick={func}>Click here</button>
      <p id="para"></p>
    </>
  );
};

export default Events;
