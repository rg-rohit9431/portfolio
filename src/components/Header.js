
import profile from '../assets/profileImg.jpg';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";
import { Button } from '@react-email/components';
import { MdOutlineFileDownload } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { MdNorthEast } from "react-icons/md";
import { lazy } from 'react';

const Header = ({ projects }) => {
    const [downloaded, setDownloaded] = useState(true);

    function changeDownloadHandler(prev) {
        setInterval(() => {
            setDownloaded(prev);
        }, 4000);
        setDownloaded(!prev);
    }
    const length = projects.length;
    const item = projects.filter((project) => project.id === length)[0];
    return (
        <header className='mt-[85px] flex p-2 gap-1 md:flex-row flex-col justify-between max-w-[1400px] w-full mx-auto lg:h-[90vh] lg:max-h-[800px] relative min-h-fit mb-[1rem]'>

            <div className='h-full lg:w-[20%] gap-[1rem] lg:gap-[.5rem] w-[100%] flex flex-col sm:flex-row  sm:justify-around  md:flex-col justify-center  lg:justify-around items-center xl:justify-center xl:gap-[2rem]'>
                <div className='w-[100%] max-w-[250px] mb-[.5rem]  flex flex-col items-center'>
                    <img src={profile} alt='ProfileImage' className='w-[90%] aspect-square mb-[.5rem] grayscale-[50%] hover:grayscale-0'/>
                    <p className='text-[1.2rem] font-[500] text-[#116466]'>Hello guys! I am Rohit Gupta...</p>
                </div>
                <div className='projectImg  relative overflow-x-hidden w-[100%] max-w-[250px] h-fit'>
                    <p className='text-[1.8rem] text-center w-[100%] mb-1'>Latest Project</p>
                    <img src={item.img} alt={item.name} className='mb-[1rem] w-[100%] aspect-auto'></img>
                    <Link to={item.link} target='_blank' onLoad={lazy} className='w-full flex justify-between items-center rounded-md p-[.6rem] border-2 border-black shadow-md bg-[white] mt-2 text-[1.3rem] font-[600] text-[#232323] '>
                        <p>See Project...</p>
                        <MdNorthEast className='text-[1.4rem] text-[#232323]' />
                    </Link>
                </div>
            </div>


            <div className=' flex flex-col items-center lg:items-end gap-[2rem] w-[100%] lg:w-[80%] h-full xl:justify-center xl:gap-[2rem]'>
                <div className='w-[100%] max-w-[500px] mt-10 '>
                    <h1 className=' text-[2.4rem] sm:text-[3.4rem] md:text-[4.6rem]  md:text-nowrap'>Rohit Gupta</h1>
                    <div className='w-[90px] h-[12px] bg-[#116466] mt-4'></div>
                </div>
                <div className='w-[100%]  max-w-[700px] flex flex-col sm:items-center md:items-start'>
                    <p className='mb-3 text-xl'>-Introduction</p>
                    <p className='mb-3 text-2xl '>
                        Full Stack Web Developer and UI & UX Designer
                    </p>
                    <p className=' lg:ml-3 w-[100%] max-w-[500px] text-wrap'>
                        Whether it's developing interactive web applications, optimizing front-end performance, or creating elegant UI/UX designs, I take pride in turning ideas into reality. I thrive in collaborative environments where creativity meets technology, and I'm always excited to take on new challenges.
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row w-[100%]  max-w-[700px] gap-[1rem] lg:gap-[3rem] lg:justify-normal justify-center items-center z-1'>
                    <div className='flex items-center w-[100%] lg:w-fit  gap-[3rem] justify-center'>
                        <NavLink to='https://www.instagram.com/rg_rohit9431' target='_blank'><FaInstagram className="text-[1.9rem]" /></NavLink>
                        <NavLink to='https://www.linkedin.com/in/rohit-gupta-40a631232/' target='_blank' ><FaLinkedin className="text-[1.9rem]" /></NavLink>
                        <NavLink to='https://github.com/rg-rohit9431' target='_blank'><FaGithub className="text-[1.9rem]" /></NavLink>
                    </div>
                    <Button href={Resume} color="transparent"
                        target="_blank" download="Resume">
                        <div className=' download flex shadow-sm px-4 py-3 rounded-md border-2 items-center gap-[.5rem]' onClick={() => changeDownloadHandler(downloaded)}>
                            <p className="text-[1.2rem] font-semibold">Download CV</p>
                            {
                                downloaded ? (<MdOutlineFileDownload className='text-[1.5rem]' />)
                                    : (<MdDownloadDone className='text-[1.5rem]' />)
                            }
                        </div>
                    </Button>
                </div>
            </div>
        </header>

    );

}


export default Header;
