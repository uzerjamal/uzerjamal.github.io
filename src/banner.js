import './style/tailwind.css';

function Banner(){
    return(
        <div class="min-w-full min-h-screen bg-gradient-to-br from-blue via-black to-black flex">
            <div class='text-white font-md w-auto lg:w-2/3 ml-20 lg:ml-40 m-auto'>
                <span></span>
                <h1 class='text-gradient font-light text-6xl lg:text-8xl '>UZER</h1>
                <h1 class='text-gradient font-light text-6xl lg:text-8xl '>JAMAL</h1>
                <hr class='bg-white h-1 w-20 rounded-full' style={{marginLeft:1 +'rem'}}></hr>
                <hr class='bg-white h-1 w-20 rounded-full' style={{marginLeft:4 +'rem', marginTop:0.5 + 'rem'}}></hr>
                <h2 class='text-2xl lg:text-4xl font-thin text-gradient '>software developer</h2>
                <a href="#" class='text-xl' style={{lineHeight:4 +'rem'}}><span class='font-extrabold text-white hover:text-pink transition bg-pink px-4 py-2 hover:bg-white'>RECENT PROJECTS</span></a>
            </div>

            <div class="w-0 lg:w-1/3 bg-earth-map rounded-l-full earth-spin"></div>
        </div>
    );
}

export default Banner;