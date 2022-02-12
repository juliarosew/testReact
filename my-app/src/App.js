import React, {useState} from 'react'; 
import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";
import data from './csvjson.json';
import MyD3Component from './MyD3Component';
import TestComponent from './TestComponent';
import BarChartComponent from './BarChartComponent';

const petsData = data;

console.log(data);

const listData = petsData
  .filter(d => d.Species === "Dog")
  .slice(0, 10)

console.log(listData);

const rolledUpData = d3.rollups(petsData, v => v.length, d => d["Primary Breed"]).map(([k, v]) => ({Breed: k, Total: v}));

//const test = rolledUpData;

console.log(rolledUpData);

function App() {
  return (
    <div className="something">
      <header>
      <div class="content">
            <section class="title">
                <a href="/">[TODO: add your project name here]</a>
            </section>

            <section>   
                <p>
                    <strong>Team Members</strong>: [TODO] team member #1, team member #2, team member #3, team member #4 (if applicable)
                </p>
            </section>

            <section>
              <MyD3Component data={listData}/>
              <BarChartComponent data={rolledUpData}/>
            </section>

            <section>
                <h2>Design Decisions</h2>
                <em>[TODO: add a rationale for your design decisions.
                     How did you choose your particular visual encodings and interaction techniques?
                     What alternatives did you consider and how did you arrive at your ultimate choices?]</em>
            </section>

            <section>
                <h2>Development Process</h2>
                    <em>[TODO: describe how the work was split among the team members.
                        Include a commentary on the development process, including answers to the following questions: 
                        Roughly how much time did you spend developing your application (in people-hours)? 
                        What aspects took the most time?]</em>
            </section>

            <div class="footer">
                <a href="https://courses.cs.washington.edu/courses/cse442/21au/">CSE 442 Data Visualization</a>
                <a href="http://www.washington.edu">University of Washington</a>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;