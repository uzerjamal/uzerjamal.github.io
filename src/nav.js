import './style/tailwind.css';

function Nav(){
    return(
        <div>
            <header class="min-w-full px-8 py-4 bg-black flex justify-between">
                <div>
                    <span class='text-2xl font-extrabold text-white hover:text-pink transition'>UZER.</span>
                </div>
                <div>
                    <nav class="text-2xl text-white font-light">
                        <a href="#" class="hover:text-pink transition px-2">ABOUT</a>
                        <a href="#" class="hover:text-pink transition px-2">SKILLS</a>
                        <a href="#" class="hover:text-pink transition px-2">PROJECTS</a>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Nav;