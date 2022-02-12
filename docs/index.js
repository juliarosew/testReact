import * as d3 from "d3";
import data from './csvjson.json';
import React, {useState} from 'react'; 

const petsData = data;

console.log(data);

const listData = petsData
  .filter(d => d.Species === "Dog")
  .slice(0, 10)

console.log(listData);
//const petsData = d3.csv(data);
//const petsData = { name: "Pets", color: "#ffffff", items: data }; 
//console.log(petsData);

function index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyD3Component data={listData}/>
        <ol></ol>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default index;