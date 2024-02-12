import aboutImg from '../assets/aboutImg.jpg';



const About = () => {
    return (
        <div className="bg-[#232323] w-[100%] h-fit p-[2rem] ">
            <div className="flex flex-col max-w-[1800px] w-full xl:max-h-[800px] relative items-center h-full mx-auto">
                <p className="text-[2.4rem] my-[1rem] font-bold text-[#c0c0c0]  text-center w-[100%] mb-[1rem] uppercase ">About Us</p>
                <div className='mt-[2rem] flex flex-col-reverse  gap-2 lg:flex-row w-[100%] justify-center items-center h-full'>

                    <div className="flex flex-col justify-center items-center gap-[1rem]  w-[100%] lg:w-[50%] h-[100%] ">
                        <h2 className=" text-[2.4rem] w-[100%] mb-2 font-[600] text-[#c0c0c0] pl-1">Why Should Hire Me for Your <span className="text-[#116466]">Projects</span>?</h2>
                        <p className="lg:w-[90%] text-[1.4rem] text-[#c0c0c0] mb-2 ">I'm an experienced full-stack web developer with a strong track record in creating user-friendly, secure, and high-performance web applications.</p>

                        <ul className="list-disc w-[90%] lg:w-[80%] mx-auto text-[#116466]">
                            <li className="text-[1.1rem]">Extensive experience in <span className='text-[#c0c0c0]'>full-stack web development</span>.</li>
                            <li className="text-[1.1rem]"><span className='text-[#c0c0c0]'>User-centric design </span>for exceptional user experiences.</li>
                            <li className="text-[1.1rem]"><span className='text-[#c0c0c0]'>Adaptability</span> to changing project requirements.</li>
                            <li className="text-[1.1rem]">Transparent <span className='text-[#c0c0c0]'>communication</span> for effective collaboration.</li>
                        </ul>
                    </div>
                    <img src={aboutImg} className=' w-[60%] md:w-[40%] lg:w-[30%] aspect-auto' alt='aboutImage' />
                </div>
            </div>
        </div>
    );

}

export default About;