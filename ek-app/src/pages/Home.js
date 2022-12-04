import React from "react";
import koala from '../images/Koala.png';
import jillian from '../images/Jillian.jpg';
import hanock from '../images/Hanock.PNG';
import william from '../images/William.jpg';
import gelila from '../images/Gelila.jpg';
import branch1 from '../images/branch1.png';
import branch2 from '../images/branch2.png';
import {Link } from "react-router-dom";

const Home = () => {
    return (
        <section id="Home">
            <head>
            </head>

            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

            <div>
                <h1> Exploding Koalas </h1>
                <div>
                    <img alt="" class="plain" src={branch1} />
                    <img alt="koala" class="plain" src={koala} />
                    <img alt="" class="plain" src={branch2} />

                    <div class="person-container">
                        <img alt="william headshot" class="home" src={william} />
                        <div class="person-description">
                            <div class="text-box"> Hello, I’m William! </div>
                            <div class="text-box"> I’m a sophomore planning to double in InfoDesign and IMDM. Next semester I want to be a Designer at Hack4Impact! </div>
                            <Link class="website-button" to='/William'> My Website </Link>
                        </div>
                    </div>

                    <div class="person-container">
                        <div class="person-description">
                            <div class="text-box"> Hello, I’m Gelila! </div>
                            <div class="text-box"> I’m a sophomore studying Computer Science. Next Semester I want to be an Engineer at Hack4Impact! </div>
                            <Link class="website-button" to='/Gelila'> My Website </Link>
                        </div>
                        <img alt="gelila headshot" class="home" src={gelila} />
                    </div>

                    <div class="person-container">
                        <img alt="hanock headshot" class="home" src={hanock} />
                        <div class="person-description">
                            <div class="text-box"> Hello, I’m Hanock! </div>
                            <div class="text-box"> I’m a junior studying Computer Science. Next semester I want to be a Tech Lead at Hack4Impact! </div>
                            <Link class="website-button" to='/Hanock'> My Website </Link>
                        </div>
                    </div>

                    <div class="person-container">
                        <div class="person-description">
                            <div class="text-box"> Hello, I’m Jillian! </div>
                            <div class="text-box"> I’m a sophomore studying Computer Science. Next semester I want to be an Engineer at Hack4Impact! </div> 
                            <Link class="website-button" to='/Jillian' autoFocus> My Website </Link>
                        </div>
                        <img alt="jillian headshot" class="home" src={jillian} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;