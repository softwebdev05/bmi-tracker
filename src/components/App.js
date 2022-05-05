import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import BmiForm from "./BmiForm";

function App() {
  const [state, setState] = useState([]);
  function handleChange(newData) {
    const { height, weight } = newData;
    const heightInM = height / 100;
    newData.bmi = (weight / (heightInM * heightInM)).toFixed(2);
    newData.id = uuidv4();
    let newState = [...state, newData];
    let len = newState.length;
    if (len > 7) newState = newState.slice(1, len);
    setState(newState);
  }
  return (
       <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> BMI Tracker </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <BmiForm onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default App; 