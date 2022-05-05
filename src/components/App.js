import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import "./App.css";
import BmiForm from "./BmiForm";

function App() {

  function handleChange(data) {
    console.log(data);
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