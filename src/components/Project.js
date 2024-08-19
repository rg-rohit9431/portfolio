// import { Link } from 'react-router-dom';
import { useState } from 'react';



import data from '../data.js';
import Card from './Card.js';

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const length = data.length - 6;
  const projects = data.filter((project) => project.id > length);
  return (
    <div id='project' className='w-[100%] h-fit  border-l-2  pb-[4rem] relative'>
      <p className='text-[2.4rem]  font-bold text-center my-[2rem] uppercase'>Featured Projects</p>


      {
        showAll !== false ? (
          <div>
            <div className=' flex flex-wrap gap-[2rem] justify-center'>
              {
                data.map(project =>
                  <Card key={project.id} project={project} />
                )
              }
            </div>
            {showAll && <button onClick={() => {
              setShowAll(false);
            }} className='absolute bottom-[1rem] right-[3rem] text-blue-400'>See less...</button>}
          </div>
        )
          : (
            <div >
              <div className=' flex flex-wrap gap-[2rem] justify-center'>
                {
                  projects.map(project =>
                    <Card key={project.id} project={project} />
                  )
                }
              </div>
              {!showAll && <button onClick={() => {
                setShowAll(true);
              }} className='absolute bottom-[1rem] right-[3rem] text-blue-400'>See More...</button>}
            </div>
          )
      }

    </div>


  )

}

export default Project;
