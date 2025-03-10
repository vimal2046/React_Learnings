import React, { useEffect, useState } from "react";
import axios from "axios";

const PromiseAndAsync = () => {
  console.log("logging in");  
  
  const event = new Promise((resolve, reject)=>{
     let err = "kwenfkqer"
     var namee = "pedro";

     if(namee == 'pedro') {
      resolve(namee);
     }else{
      reject(err);
     }
  })
event
.then((namee)=>{
  console.log("passed successfully " + namee);
  return namee
})
.then((namee)=>{
  console.log("passed 2nd time " + namee )
})
.catch((err)=>{
  console.log("wrong cases and the msg is"+ err);
})
.finally(()=>{
  console.log('running finally');
})
}


const data = axios.get("https://cat-fact.herokuapp.com/facts");

data.then((res)=>{
    console.log(res)
    console.log('success')
})
.catch((err)=>{
    console.log(err)
    console.log("data not fetched")
})
.finally(()=>{
  console.log("data fetching was complete")
})

export default PromiseAndAsync