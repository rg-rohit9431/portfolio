


//components
import Header from './Header';
import About from './About';
import Project from './Project';
import data from '../data.js';
import Skill from './Skill';
// import Contact from './Contact';
import Footer from './Footer.js';
import Leftbar from './Leftbar.js';
import Workexperience from './Workexperience.js';

const Layout = () => {
    return (


        <div className='relative flex justify-end w-full h-fit '>

            {/* left part */}
            <div className='w-[25%] md:block hidden h-fit fixed top-0 left-0 z-10'>
                <Leftbar projects={data} />
            </div>
            
            {/* right part */}
            <div className='md:w-[75%] h-fit flex flex-col items-center justify-center'>
                <Header />
                <About />
                <Project />
                <Workexperience />
                <Skill />
                {/* <Contact /> */}
                <Footer />
            </div>

        </div>
    );
}

export default Layout;