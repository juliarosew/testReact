import React, {useState} from 'react'; 
import * as d3 from "d3";

function TestComponent() {

    return(
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
                <em>[TODO: add your visualization here]</em>
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
    );
  
}

export default TestComponent; 