import React, { lazy } from 'react'
import { Link } from 'react-router-dom';
import { MdNorthEast } from "react-icons/md";

const Card = ({ project }) => {
  return (
    <div className='w-[100%] max-w-[320px] h-fit rounded-md p-2'>
      < img className='w-full h-[200px] object-fill mb-[1rem] rounded-sm ' src={project.img} alt={project.name} />

      <p className='text-[1.6rem] w-[100%] mb-[1rem] ml-[.5rem] font-[600] text-[#116466]'>{project.name}</p>

      <Link to={project.link} target='_blank' onLoad={lazy} className='w-full flex justify-between items-center rounded-md p-[.6rem] link-shadow bg-[white] mt-2 text-[1.3rem] font-[600] text-[#232323] '>
        <p>See Project...</p>
        <MdNorthEast className='text-[1.4rem] text-[#232323]' />
      </Link>
    </div >
  )
}

export default Card;