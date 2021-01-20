import './style/tailwind.css';

function Nav(){
    return(
        <div class='z-50'>
            <header class="min-w-full px-8 h-16 bg-transparent flex justify-between items-center fixed">
                <div>
                    <span class='text-2xl font-extrabold text-white hover:text-pink transition bg-pink px-2 hover:bg-white'>UZER.</span>
                </div>
                <div>
                    <nav class="text-lg text-white font-light">
                        <a href="#About" class="hover:text-pink transition px-2">ABOUT</a>
                        <a href="#Skills" class="hover:text-pink transition px-2">SKILLS</a>
                        <a href="#Portfolio" class="hover:text-pink transition px-2">PROJECTS</a>
                        <a href="#Contact" class="hover:text-pink transition px-2">CONTACT</a>
                        <a href="https://github.com/uzerjamal" class="hover:text-pink transition px-2">GITHUB</a>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Nav;