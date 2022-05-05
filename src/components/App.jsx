import React, { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import BmiForm from "./BmiForm";

function App() {
  const initialState = JSON.parse(localStorage.getItem('bmiData')) || [];
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('bmiData', JSON.stringify(state));
  }, [state]);

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

  function handleDelete(id) {
    localStorage.setItem('bmiLastState', JSON.stringify(state));
    setState(prevValue => {
      return prevValue.filter(info => info.id !== id);
    });
  }

  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> BMI Tracker </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <BmiForm onChange={handleChange} />
          <div>
            <div className='row center'>
              <h4 className='white-text'>7 Day Data</h4>
            </div>
            <div className='data-container row'>
              {state.length > 0 ? (
                state.map(info => {
                  return (
                    <Info 
                      key={info.id}
                      id={info.id}
                      weight={info.weight}
                      height={info.height}
                      date={info.date}
                      bmi={info.bmi}
                      deleteCard={handleDelete}
                    />
                  );
                })
              ) : (
                <div className='center white-text'>No log found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;  