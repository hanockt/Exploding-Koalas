import React from "react";
import jillian from '../images/Jillian.jpg';
export default function Jillian() {
    return (
        <section id="Jillian">

            <head> 
                
            </head>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <div> 
                <a id="arrow" href="./Home.js"> &larr; </a>
            </div>

            <div>
                    <img class="personal" src = {jillian} />
                <div>
                    <h1> Jillian Sands </h1>

                    <div class="text-box"> 
                        <p> 
                            Hi! My name is Jillian. I'm a second-year computer 
                            science major at the University of Maryland, College
                            Park. I also minor in Spanish Language, Culture, and
                            Professional Contexts. Keep reading to learn more
                            about me! 
                        </p>
                    </div>

                    <div class="text-box">
                        <h2> Tech Stack </h2>
                        <ul> 
                            <li> Java </li>
                            <li> C </li>
                            <li> Python </li>
                            <li> Javascript </li>
                            <li> HTML </li>
                        </ul>
                    </div>

                    <div class="text-box"> 
                    <h2> Skills </h2>
                        <ul> 
                            <li> Communication </li>
                            <li> Problem Solving </li>
                            <li> Collaboration </li>
                        </ul>
                    </div>
                </div>
            </div>
    </section>
    );
}