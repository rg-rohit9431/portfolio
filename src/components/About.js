// import aboutImg from '../assets/aboutImg.jpg';
import aboutme from '../assets/aboutme.png';



const About = () => {
    return (
        <div className=" bg-[#232323]   w-full  relative  h-fit  p-[1rem]">
            {/* <p className="text-[2.4rem] my-[1rem] font-bold text-[#c0c0c0]  text-center w-[100%] mb-[1rem] uppercase ">About Me</p> */}
            <h2 className="w-full text-[2.4rem] text-center mb-2 font-[600] text-[#c0c0c0] pl-1">Why Should Hire Me for Your <span className="text-[#116466]">Projects</span>?</h2>

            <div className='flex flex-col-reverse relative gap-2 lg:flex-row w-[100%] items-center h-fit min-h-[90vh] '>
                <p className="md:w-[40%] text-[1.4rem] text-[#c0c0c0]  relative md:top-[-100px]">I'm an experienced MERN-stack web developer with a strong track record in creating user-friendly, secure, and high-performance web applications.</p>

                {/* aboutImage */}
                <img src={aboutme} className=' md:w-[40%] aspect-auto' alt='aboutImage' />

                <ul className="list-disc  w-[80%] lg:w-[40%] mx-auto text-[#116466]  relative md:top-[100px]">
                    <li className="text-[1.1rem]">Extensive experience in <span className='text-[#c0c0c0]'>Mern-stack web development</span>.</li>
                    <li className="text-[1.1rem]"><span className='text-[#c0c0c0]'>User-centric design </span>for exceptional user experiences.</li>
                    <li className="text-[1.1rem]"><span className='text-[#c0c0c0]'>Adaptability</span> to changing project requirements.</li>
                    <li className="text-[1.1rem]">Transparent <span className='text-[#c0c0c0]'>communication</span> for effective collaboration.</li>
                </ul>

            </div>
        </div>
    );

}

export default About;