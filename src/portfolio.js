import React from "react";
import './style/tailwind.css';
import keyloggerDetector from './style/images/KeyloggerDetector.png';
import quaketracker from './style/images/QuakeTracker.png';
import rfid from './style/images/Rfid.png';
import centralCatering from './style/images/centralCatering.png';
import helpingHands from './style/images/helpingHands.png';
import nBengal from './style/images/nBengal.png';

function Portfolio(){
    return(
        <div class="bg-black min-w-full min-h-screen flex flex-col" id="Portfolio">
            <div class="min-w-full flex justify-evenly mb-20 mt-20">
                <h2 class="text-pink text-6xl font-bold">PORTFOLIO</h2>
            </div>
            <div class="flex justify-evenly">
                <div class='w-full lg:w-5/6 flex flex-col'>
                    <div class='w-full lg:flex'>
                    <PortfolioItem 
                    imageURL={keyloggerDetector} 
                    title={'Keylogger Detector'} 
                    techStack={'JAVA, SWING'} 
                    description={'Detects unauthorized apps sending data through ports commonly used by keyloggers.'} 
                    codeURL={'https://github.com/uzerjamal/Keylogger-detector'}
                    />

                    <PortfolioItem 
                    imageURL={rfid} 
                    title={'RFID based person tracking system'} 
                    techStack={'JAVA, SERVLET, JSP, MYSQL'} 
                    description={'Uses strategically placed RFID readers to monitor a child in school.'} 
                    codeURL={'https://github.com/uzerjamal/RFID-Person-tracking-system'}
                    />

                    <PortfolioItem 
                    imageURL={quaketracker} 
                    title={'Quake Tracker'} 
                    techStack={'ANDROID, JAVA'} 
                    description={'Simple android app for displaying a list of recent earthquakes.'} 
                    codeURL={'https://play.google.com/store/apps/details?id=com.uzerjamal.quaketracker&hl=en&gl=US'}
                    buttonText={'VIEW ON GOOGLE PLAY STORE'}
                    />
                    </div>

                    <div class='w-full lg:flex'>
                    <PortfolioItem 
                    imageURL={centralCatering} 
                    title={'Centeral Catering WP'} 
                    techStack={'WORDPRESS'} 
                    description={'Wordpress website for a catering business'} 
                    codeURL={'https://centralcatering.com.au/'}
                    buttonText={'VISIT WEBSITE'}
                    />

                    <PortfolioItem 
                    imageURL={helpingHands} 
                    title={'Helping Hands WP'} 
                    techStack={'WORDPRESS'} 
                    description={'Wordpress website for a elderly care business'} 
                    codeURL={'https://helpinghandsnsw.com.au/'}
                    buttonText={'VISIT WEBSITE'}
                    />

                    <PortfolioItem 
                    imageURL={nBengal} 
                    title={'NBengal WP'} 
                    techStack={'WORDPRESS'} 
                    description={'Wordpress website for a financing service'} 
                    codeURL={'https://nbengal.com.au/'}
                    buttonText={'VISIT WEBSITE'}
                    />
                    </div>

                    <div class='flex justify-evenly'>
                        <a href="https://github.com/uzerjamal" class='text-xl' style={{lineHeight:4 +'rem'}}><span class='font-extrabold text-white hover:text-pink transition bg-pink px-4 py-2 hover:bg-white'>VIEW MORE</span></a>
                    </div>
                </div>
            </div>           
        </div>
    );
}

class PortfolioItem extends React.Component{
    render(){
        return(
            <div class="container mx-auto bg-gray-100 py-10 flex justify-center">
                <div class="bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out">
            <div class="">
                <img src={this.props.imageURL} alt="" class="rounded-t"></img>
            </div>
            <div class="p-4">
            <h2 class="text-2xl uppercase">{this.props.title}</h2>
            <p class="font-light text-gray-500 text-lg my-2">{this.props.techStack}</p>
            <p>{this.props.description}</p>
            <a href={this.props.codeURL} class="block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-pink duration-300 ease-in-out">{this.props.buttonText || "View on Github"}</a>
            </div>
            </div>
        </div>
        );
    }
}

export default Portfolio;