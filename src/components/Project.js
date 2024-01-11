
import data from '../data.js';
import Card from './Card.js';

const Project = ({ showAll }) => {
  const length= data.length-6;
  const projects = data.filter((project) => project.id > length);
  return (
    <div id='project' className='w-[100%] h-fit mt-[1rem] '>
      <p className='text-[2.4rem]  font-bold text-center w-[100%] my-[2rem] uppercase'>Featured Projects</p>
      <div className='flex flex-col sm:flex-row gap-[2rem] items-center justify-center flex-wrap max-w-[1800px] w-full xl:max-h-[800px]  h-full mx-auto border-1 p-1 '>
        {
          showAll!==false ? (
            data.map(project =>
              <Card key={project.id} project={project} />
            )
          )
            : (projects.map(project =>
              <Card key={project.id} project={project} />
            )
            )
        }

      </div>

    </div>

  )

}

export default Project;
