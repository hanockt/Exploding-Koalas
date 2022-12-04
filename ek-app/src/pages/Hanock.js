import React from "react";
import hanock from '../images/Hanock.PNG';
import instagram from '../images/instagram_icon.png';
import linkedin from '../images/linkedin_icon.png';
import youtube from '../images/youtube_icon.png';
import hanock_drawing from '../images/hanock_drawing.png';
import legend_of_zelda from '../images/legend_of_zelda.gif';
import hanock_song from '../images/hanock_song.mp4';
import branch1 from '../images/branch1.png';
import branch2 from '../images/branch2.png';
import { Link } from "react-router-dom";

export default function Hanock() {
    return (
        <section id="Hanock">
             <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <div> 
                <Link class="arrow" to='/'> &larr; </Link>
                <h1> Hanock Tsegaye </h1>
            </div>

            <div>
                <img alt="" class="plain" src={branch1} /> 
                <img class="personal" src={hanock} alt="Hanock headshot" />
                <img alt="" class="plain" src={branch2} /> 
            </div>
 
            <div class="text-box text-box-personal">
                <h2> Music Production </h2>
                <p> During quarantine, I began trying new hobbies in my boredom. 
                    Lo and behold, music was a secret passion of mine.    
                </p>
                
                <video class="vid" width="360" height="202" controls>
                    <source src={hanock_song} type="video/mp4" />
                </video>
               
            </div>

            <div class="text-box text-box-personal">
                <h2> Drawing </h2>
                 <p> Been drawing for a while. It's a very therapeutic process. </p>
                 <img src={hanock_drawing} alt="hanock_drawing"/>
            </div>

            <div class="text-box text-box-personal">
                <h2> Video Games </h2>
                <img class="home" src={legend_of_zelda} alt="legend of zelda gif"/>
                <p> Some of my current favorite games! </p>
                <ul> 
                    <li> Super Smash Bros. </li>
                    <li> Legend of Zelda </li>
                    <li> Kingdom Hearts </li>
                    <li> Valorant </li>
                    <li> Pokèmon </li>
                </ul>
            </div>


            <div class="row">
                <a href="https://www.linkedin.com/in/hanock-tsegaye-007280189/">
                    <img class="icons" src={linkedin} alt="linkedin icon"/>
                </a>
                <a href="https://www.instagram.com/kippy_u/">
                    <img class="icons" src={instagram} alt="instagram icon"/>
                </a>
                <a href="https://www.youtube.com/channel/UCpsM8UwW-xBLkdP8e8efHmQ">
                    <img class="icons" src={youtube} alt="youtube icon"/>
                </a>
                
            </div>

        </section>
    );
}
