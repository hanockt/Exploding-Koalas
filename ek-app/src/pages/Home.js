import React from "react";
import koala from '../images/Koala.png';
import jillian from '../images/Jillian.jpg';
import hanock from '../images/Hanock.PNG';
import william from '../images/William.jpg';
import gelila from '../images/Gelila.jpg';

export default function Home() {
    return (
        <section id="Home">
            <head>
            </head>

            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

            <div>
                <h1> Exploding Koalas </h1>
                <div>
                    <img id="koala" src={koala} />

                    <div class="person-container">
                        <img class="home" src={william} />
                        <div class="person-description">
                            <div class="text-box"> Hello, I’m William! </div>
                            <div class="text-box"> I’m a sophomore planning to double in InfoDesign and IMDM. Next semester I want to be a Designer at Hack4Impact! </div>
                            <a class="website-button" href="./William"> My Website </a>
                        </div>
                    </div>

                    <div class="person-container">
                        <div class="person-description">
                            <div class="text-box"> Hello, I’m Gelila! </div>
                            <div class="text-box"> I’m a sophomore studying Computer Science. Next Semester I want to be a PM at Hack4Impact! </div>
                            <a class="website-button" href="./Gelila"> My Website </a>
                        </div>
                        <img class="home" src={gelila} />
                    </div>

                    <div class="person-container">
                        <img class="home" src={hanock} />
                        <div class="person-description">
                            <div class="text-box"> Hello, I’m Hanock! </div>
                            <div class="text-box"> I’m a junior studying Computer Science. Next semester I want to be a Tech Lead at Hack4Impact! </div>
                            <a class="website-button" href="./Hanock"> My Website </a>
                        </div>
                    </div>

                    <div class="person-container">
                        <div class="person-description">
                            <div class="text-box"> Hello, I’m Jillian! </div>
                            <div class="text-box"> I’m a sophomore studying Computer Science. Next semester I want to be an Engineer at Hack4Impact! </div>     s
                            <a class="website-button" HREF="https://www.homeandlearn.co.uk/WD/wds5pA.html"> My Website </a>
                        </div>
                        <img class="home" src={jillian} />
                    </div>
                </div>
            </div>
        </section>
    );
}