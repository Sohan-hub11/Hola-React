//import { Fragment } from "react";
//Fragment use to remove unneccesary <div> .

import ErrorMessage from "./components/ErrorMessage";
import Fooditems from "./components/Fooditems";
import "./App.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //let fooditems = []; 
  //let fooditems = ["Dal", "Green Salad", "Milk", "Green Vegetables", "Roti", "Ghee"];

  return (
    <> 
      <h1>Healthy Foods</h1>
      
  {/* Tertiary Operator.
      {fooditems.length === 0 ? <h4>I am Still Hungry</h4> : null}

  Logical Operators. */}
      
      {/* {fooditems.length === 0 && <h4>I am Hungry</h4>} */}
       
      {/* <ul className="list-group">
        {
          fooditems.map((item) => (
               <li key={item} className="list-group-item">{item}</li>
          ))
        }
       
      </ul> */}

      <ErrorMessage></ErrorMessage>
      <Fooditems></Fooditems>

    </>
  ); 
}

export default App;