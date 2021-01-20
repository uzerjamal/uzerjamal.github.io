import React from "react";
import './style/tailwind.css';

function about(){
    return(
        <div class="w-full lg:flex bg-black">
            <div class="w-full lg:w-1/2">
                <h2 class="text-pink text-6xl font-bold p-5">ABOUT.</h2>
                <p class="text-gray p-5 pt-10 font-semi-bold">
                    Software developer based in Delhi NCR. <br/>
                    Enthusiastic about learning new technologies and building interesting products with them.
                </p>
                <h3 class="text-pink text-3xl font-bold p-5">Reach me:</h3>
                <p class="text-white p-5 text-2xl font-semi-bold"><a href="mailto:uzerjamal@gmail.com">uzerjamal@gmail.com</a></p>
                

            </div>

            <div class="w-full lg:w-1/2">
                <h2 class="text-pink text-6xl font-bold p-5">SKILLS.</h2>
                <p class="text-gray p-5 pt-10">
                    Fullstack technologies: Javascript, NodeJS, ReactJS, MongoDB, Express, HTML/CSS, TailwindCSS.<br/><br/>
                    CMS: Wordpress, php <br/><br/>
                    Other programming languages: Java, Python <br/><br/>
                    Other skills: Adobe photoshop, Adobe illustrator <br/><br/>
                </p>
            </div>
        </div>
    );
}

export default about;