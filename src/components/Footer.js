import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='border-t-2 border-white mt-[1rem] bg-[#232323] w-[100%] h-[30vh] max-h-fit p-[2rem] flex md:flex-row flex-col items-center justify-around xl:justify-center'>
            <div className='w-[80%] sm:w-[50%] text-center md:text-left'>
                <p className='text-[1.6rem] text-[#c0c0c0]'>Get In Touch...</p>
                <p className='text-[1.2rem] text-[#116466]'>Thanks For Visiting PortFolio</p>
            </div>
            <div className='flex items-center w-[50%] lg:w-fit justify-between md:justify-start gap-[1rem] md:gap-[3rem]  text-[#c0c0c0] mt-[1rem] '>
                <NavLink to='https://www.instagram.com/rg_rohit9431' target='_blank'><FaInstagram className="text-[1.9rem]" /></NavLink>
                <NavLink to='https://www.linkedin.com/in/rohit-gupta-40a631232/' target='_blank' ><FaLinkedin className="text-[1.9rem]" /></NavLink>
                <NavLink to='https://github.com/rg-rohit9431' target='_blank'><FaGithub className="text-[1.9rem]" /></NavLink>
            </div>

        </div>
    )
}

export default Footer;