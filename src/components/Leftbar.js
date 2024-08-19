import React from 'react'


// import profile from '../assets/profileImg.jpg';
import { Link } from 'react-router-dom';
import { MdNorthEast } from "react-icons/md";
import snackbaeimg from '../assets/snackbae.png';
import { BsBuildingsFill } from "react-icons/bs";


const Leftbar = ({ projects }) => {
    // const length = projects.length;
    // const item = projects.filter((project) => project.id === length)[0];
    return (

        <div className='h-[100vh] gap-[1rem] lg:gap-[.5rem] w-[100%] flex flex-col sm:flex-row  sm:justify-around  md:flex-col justify-center  lg:justify-around items-center xl:justify-center xl:gap-[2rem]'>
            <div className='w-[100%]    flex flex-col items-center'>
                <img src="https://avatars.githubusercontent.com/u/104274011?v=4" alt='ProfileImage' className='w-[60%] aspect-square mb-[.5rem] rounded-full' />
                <p className='w-[70%] text-[1.4rem] font-[500] leading-[1.5rem]'>Rohit Kumar Gupta</p>
                <p className='w-[70%] text-[1rem] font-[300] leading-[2rem] text-gray-600'>Mail: 9431rohitkumar@gmail.com</p>
                <p className='w-[70%] text-[1rem] font-[200] flex gap-2 items-center leading-[2rem]'><BsBuildingsFill /> Snackbae</p>
            </div>
            <div className='projectImg  relative overflow-x-hidden w-[100%] max-w-[250px] h-fit'>
                <p className='text-[1.8rem]  w-[100%] mb-1'>Latest work</p>
                <img src={snackbaeimg} alt={snackbaeimg} className='mb-[1rem] w-[100%] aspect-auto'></img>
                <Link to="https://www.snackbae.in/" target='_blank' className='w-full flex justify-between items-center rounded-md p-[.6rem] border-2 border-black shadow-md bg-[white] mt-2 text-[1.3rem] font-[600] text-[#232323] '>
                    <p>See Project...</p>
                    <MdNorthEast className='text-[1.4rem] text-[#232323]' />
                </Link>
            </div>
        </div>
    )
}

export default Leftbar
