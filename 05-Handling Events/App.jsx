//import { Fragment } from "react";
//Fragment use to remove unneccesary <div> .

import ErrorMessage from "./components/ErrorMessage";
import Fooditems from "./components/Fooditems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";

function App() {
  //let fooditems = []; 
  let fooditems = ["Dal", "Green Salad", "Milk", "Green Vegetables", "Roti", "Ghee"];

  return (
    <>
      <Container>
        <h1 className="food_heading">Healthy Foods</h1>

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

        <ErrorMessage food={fooditems}></ErrorMessage>
        <Fooditems food={fooditems}></Fooditems>

      </Container>
{/* 
      <Container>
        <p>Above are the Helathy Foods, which are good for your health and well being.</p>
      </Container> */}
    </>
  );
}

export default App;