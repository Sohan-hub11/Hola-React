//import { Fragment } from "react";
//Fragment use to remove unneccesary <div> .

import "./App.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //let fooditems = []; 
  let fooditems = ["Dal", "Green Salad", "Milk", "Green Vegetables", "Roti", "Ghee"];

  //Tertiary Operator.
    //{fooditems.length === 0 ? <h4>I am Still Hungry</h4> : null}

  //Logical Operators.
  return (
    <> 
      <h1>Healthy Foods</h1>
           
  {/* Tertiary Operator.
      {fooditems.length === 0 ? <h4>I am Still Hungry</h4> : null}

  Logical Operators. */}
      {fooditems.length === 0 && <h4>I am Hungry</h4>}
       
      <ul className="list-group">
        {
          fooditems.map((item) => (
               <li key={item} className="list-group-item">{item}</li>
          ))
        }
       
      </ul>
    </>
  ); 
}

export default App;
