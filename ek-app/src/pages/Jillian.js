import React from "react";
import jillian_img from '../images/Jillian.jpg';
import branch1 from '../images/branch1.png';
import branch2 from '../images/branch2.png';
import { Link } from "react-router-dom";

const Jillian = () => {
    return (
        <section id="Jillian">

            <head> 
                
            </head>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <div> 
                <Link class="arrow" to='/'> &larr; </Link>
                <h1> Jillian Sands </h1>
            </div>

            <div>   
                <div> 
                    <img class="plain" src={branch1} />
                    <img class="personal" src={jillian_img} />
                    <img class="plain" src={branch2} />
                    
                </div>
                <div>
                    

                    <div class=" text-box text-box-personal"> 
                        <p> 
                            Hi! My name is Jillian. I'm a second-year computer 
                            science major at the University of Maryland, College
                            Park. I also minor in Spanish Language, Culture, and
                            Professional Contexts. Keep reading to learn more
                            about me! 
                        </p>
                    </div>

                    <div class="text-box text-box-personal">
                        <h2> Tech Stack </h2>
                        <ul> 
                            <li> Java </li>
                            <li> C </li>
                            <li> Python </li>
                            <li> Javascript </li>
                            <li> HTML </li>
                        </ul>
                    </div>

                    <div class="text-box text-box-personal"> 
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
};

export default Jillian;