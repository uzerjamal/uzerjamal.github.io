import './style/tailwind.css';

function Banner(){
    return(
        <div class="min-w-full min-h-screen bg-gradient-to-br from-blue via-black to-black flex">
            <div class='text-6xl lg:text-8xl text-white font-md w-auto lg:w-2/3 ml-20 lg:ml-40 m-auto'>
                <h1>UZER</h1>
                <h1>JAMAL</h1>
                <span></span>
                <h2 class='text-4xl lg:text-6xl'>software developer</h2>
            </div>

            <div class="w-0 lg:w-1/3 bg-earth-map rounded-l-full earth-spin"></div>
        </div>
    );
}

export default Banner;