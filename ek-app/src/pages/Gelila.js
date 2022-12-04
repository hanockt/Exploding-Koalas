import React from "react";
import gelila from '../images/Gelila.jpg';
import schitts_creek from '../images/schitts_creek.jpg';
import succession from '../images/succession.jpg';
import beautiful_boy from '../images/beautiful_boy.jpg';
import the_batman from '../images/the_batman.jpg';
import instagram from '../images/instagram_icon.png'
import linkedin from '../images/linkedin_icon.png'
import { Link } from "react-router-dom";

export default function Gelila() {
    return (
        <section id="Gelila">

            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <div> 
                <Link class="arrow" to='/'> &larr; </Link>
                <h1> Gelila Kebede </h1>
            </div>

            <div>
                {/**<img class="plain" src={branch1} /> */} 
                <img class="personal" src={gelila} alt="Gelila headshot"/>
                {/**<img class="plain" src={branch2} /> */} 
            </div>
            

            <div class="text-box text-box-personal">
                <h2> CURRENT PLAYLIST</h2>
                <iframe title="spotify" src="https://open.spotify.com/embed/playlist/3ymptxxvAwKVUjYjKFjtyR?utm_source=generator&theme=0" width="75%" height="400" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div class="text-box text-box-personal"> 
                <h2> MOVIES + SHOWS </h2>

                <div class="movies_container">
                    <div class="movie1">
                        <img class="movies" src={succession} alt="succession poster"/>
                        <p> Succession </p>
                    </div>
                     <div class="movie2">
                         <img class="movies" src={beautiful_boy} alt="beautiful_boy poster"/>
                         <p> Beautiful Boy </p>
                    </div>
                    <div class="movie3">
                        <img class="movies" src={the_batman} alt="the_batman poster"/>
                        <p> The Batman </p>
                    </div>

                    <div class="movie4">
                        <img class="movies" src={schitts_creek} alt="schitts_creek poster"/>
                        <p> Schitt's Creek </p>
                    </div>
                 </div>
            </div>


            <div class="text-box text-box-personal"> 
                <h2> HOBBIES </h2>
                <div class="text_row">
                    <div class="text_column">
                        <h4> Dancing </h4>
                        <p> I've been dancing since I was 3 and have been a part of a few dance teams, though, I am not a part of any currently.</p>
                    </div>
        
                    <div class="text_column">
                        <h4> Cooking + Baking </h4>
                        <p> My love for cooking and baking came mostly from the times of quarantine. If I ever have the time, I love to try new recipes out! </p>
                    </div>
        
                    <div class="text_column">
                        <h4> Spending over an hour trying to find something to watch on Hulu to just go back and watch the same show I have watched 50 times already.</h4>
                        <p> I mean this seems self explanatory.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <a href="https://www.instagram.com/gelila.kebede/" target="_blank" rel="noreferrer"> 
                    <img class="icons" src={instagram} alt="instagram icon"/>
                </a>
                
                <a href="https://www.linkedin.com/in/gelila-kebede/" target="_blank" rel="noreferrer"> 
                    <img class="icons" src={linkedin} alt="linkedin icon"/>
                </a>
            </div>
        </section>
    );

}

