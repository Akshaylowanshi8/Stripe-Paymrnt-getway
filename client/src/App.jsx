import React from 'react'
import axios from "axios";
const App = () => {
  const buybtn=async()=>{
    try {
      let res = await axios.post("http://localhost:3000/payment/orders");
      if(res && res.status === 200){
        window.location.href = res.data.url;
        console.log(res.data);
      }
    } catch (error) {
      console.log("Error",error);
    }
  }
  
  return (
    <div>
      <img width="200px" src="https://betanews.com/wp-content/uploads/2014/11/front-scaled.jpg" alt="" />
      <h1>payment page </h1>
      <h1>Price : 100</h1>
      <button  onClick={buybtn}>buy now</button>
    </div>
  )
}

export default App