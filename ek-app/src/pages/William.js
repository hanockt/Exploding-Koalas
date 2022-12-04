import React from "react";
import william_img from '../images/William.jpg';
import branch1 from '../images/branch1.png';
import branch2 from '../images/branch2.png';
import { Link } from "react-router-dom";

const William = () => {
    return (
        <section id="William">

            <head> 
                
            </head>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <div> 
                <Link class="arrow" to='/'> &larr; </Link>
                <h1> William Le </h1>
            </div>

            <div>   
                <div> 
                    <img alt="" class="plain" src={branch1} />
                    <img alt="" class="personal" src={william_img} />
                    <img alt="" class="plain" src={branch2} />
                    
                </div>

                    <div class=" text-box text-box-personal"> 
                        <p> 
                            I'm a sophomore studying Technology & Information
                            Design. My interests are: 
                        </p>
                        <ul> 
                            <li> Design </li>
                            <li> Fashion </li>
                            <li> Sports </li>
                        </ul>
                       
                    </div>

                    <div class="text-box text-box-personal">
                        <h2> Design </h2>
                        <p> I have always been passionate in art as a young kid.
                            As I continued to grow up, I enjoyed making graphic
                            design pieces. However, this past year, I have been
                            practicing skiils in UI/UX Design!
                        </p>
                    </div>

                    <div class="text-box text-box-personal"> 
                        <h2> Fashion </h2>
                        <p> Growing up, my family has always been keeping with
                            different fashion trends so I followed them :) And 
                            with my eye for design, I always had a set idea of 
                            what materials/style I like to wear. 
                        </p>
                    </div>

                    <div class="text-box text-box-personal"> 
                        <h2> Sports </h2>
                        <p> My favorite sport is soccer and I also enjoy 
                            playing/watching basketball, football, and more.
                            I also played competitive soccer since I was around
                            10 years old and I just continued with my passion
                            until I came here. Now I'm just playing for fun with
                            friends on the club team!
                        </p>
                    </div>
                </div>
            
    </section>
    );
};

export default William;