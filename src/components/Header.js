

import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Resume from "../assets/RohitKumarGuptaResume.pdf";
import { Button } from '@react-email/components';
import { MdOutlineFileDownload } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [downloaded, setDownloaded] = useState(true);

    function changeDownloadHandler(prev) {
        setInterval(() => {
            setDownloaded(prev);
        }, 4000);
        setDownloaded(!prev);
    }
    return (

        <div className=' flex flex-col items-end justify-center  gap-[2rem] w-[100%] h-[100vh]'>
            <div className='w-[90%] max-w-[500px] mt-10 '>
                <h1 className=' text-[2.4rem] sm:text-[3.4rem] md:text-[4.6rem]  md:text-nowrap'>Rohit Gupta</h1>
                <div className='w-[90px] h-[12px] bg-[#116466] mt-4'></div>
            </div>
            <div className='w-[90%]  max-w-[700px] flex flex-col sm:items-center md:items-start'>
                <p className='mb-3 text-xl'>-Introduction</p>
                <p className='mb-3 text-2xl '>
                    Full Stack Web Developer and Software Developer
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
                    target="_blank" download="RohitKumarGuptaResume">
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

    );

}


export default Header;
