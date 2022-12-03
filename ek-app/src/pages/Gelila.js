import React from "react";
import gelila from '../images/Gelila.jpg';
import schitts_creek from '../images/schitts_creek.jpg';
import succession from '../images/succession.jpg';
import beautiful_boy from '../images/beautiful_boy.jpg';
import the_batman from '../images/the_batman.jpg';

export default function Gelila() {
    return (
        <section id="Gelila">

            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <div> 
                <a id="arrow" href="./Home.js"> &larr; </a>
            </div>


            <img class="personal" src={gelila} />

            <div class="text-box"> 
                <h3> CURRENT PLAYLIST</h3>
                <iframe title="spotify" src="https://open.spotify.com/embed/playlist/3ymptxxvAwKVUjYjKFjtyR?utm_source=generator&theme=0" width="50%" height="400" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div class="text-box"> 
                <h3> MOVIES + SHOWS </h3>

                <div class="row">
                    <div class="column">
                        <img class="movies" src={succession} />
                        <p> Succession </p>
                    </div>
                    <div class="column">
                        <img class="movies" src={beautiful_boy} />
                        <p> Beautiful Boy </p>
                    </div>
                    <div class="column">
                        <img class="movies" src={the_batman} />
                        <p> The Batman </p>
                    </div>

                    <div class="column">
                        <img class="movies" src={schitts_creek} />
                        <p> Schitt's Creek </p>
                    </div>
                </div>
            </div>


            <div class="text-box"> 
                <h3> HOBBIES </h3>
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

            {/* still need to add boxes for social media icons */}

        </section>
    );

}

