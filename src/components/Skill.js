import React, { useState } from 'react';
import { Link } from 'react-router-dom';


//icons
import { SiGeeksforgeeks, SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";
function Skill() {
  const [visible, setVisible] = useState(false);

  return (
    <div className='text-[#c0c0c0] w-full bg-[#232323] relative  h-fit mx-auto p-[1rem]'>
      <p className="text-[2.4rem] my-[1rem] font-bold text-[#c0c0c0]  text-center w-[100%] uppercase ">Skills</p>
      <div className=" h-full flex flex-col items-center justify-center lg:w-[70%]  w-[90%] mx-auto">
        {/* <!-- skill1 --> */}
        <div
          className="flex gap-[3rem] w-[90%]  mx-auto  border-l-2  relative pl-[2rem] pb-[2rem]">
          <div
            className="w-[2.5rem] h-[2.5rem] rounded-full border-2 border-dotted  absolute left-[-1.25rem] top-[-1.25rem] flex items-center justify-center">
            <div className="circle w-[1.3rem] h-[1.3rem] rounded-full bg-[#116466] absolute"></div>
          </div>
          <div>
            <div className=" mb-2 font-[bold] md:text-[1.4rem] text-[1.2rem] text-[#116466]">Frontend
              Development
            </div>
            <p className="text-[.9rem]">I specialize in HTML, CSS, JavaScript and ReactJs, creating
              visually appealing and responsive interfaces with a focus on user experience.
            </p>
            <li className='w-[90%] mx-auto mt-2'>I am skilled in HTML/CSS, JavaScript, React.js, and TypeScript, with experience using TailwindCSS and Bootstrap for styling and responsive design. I utilize tools like VS Code for efficient development.</li>
          </div>
        </div>

        {/* <!-- skill2 --> */}
        <div
          className="flex gap-[3rem] w-[90%] mx-auto  border-l-2  relative pl-[2rem] pb-[2rem]">
          <div
            className="w-[2.5rem] h-[2.5rem] rounded-full border-2 border-dotted absolute left-[-1.25rem] top-[-1.25rem] flex items-center justify-center">
            <div className="circle w-[1.3rem] h-[1.3rem] rounded-full bg-[#116466] absolute"></div>
          </div>
          <div>
            <div className="heading mb-2 font-[bold] md:text-[1.4rem] text-[1.2rem] text-[#116466]">Leadership Skill
            </div>
            <p className="text-[.9rem] ">I possess strong leadership skills, guiding teams through challenges, fostering collaboration, and achieving project goals with effective communication.
            </p>
            <li className='w-[90%] mx-auto mt-2'>At <Link target='_blank' to='https://www.snackbae.in/' className='text-blue-600'>SnackBae</Link>, Leading a team of developers and managing interns to deliver responsive web applications, increasing user engagement by 20%.</li>
            <li className='w-[90%] mx-auto mt-2'>At <Link target='_blank' to='https://www.snackbae.in/' className='text-blue-600'>SnackBae</Link>,Driving a collaborative approach with UX/UI designers and backend engineers, achieving a 95% customer satisfaction rate through effective project management and high-quality solutions.</li>
          </div>
        </div>

        {/* <!-- skill3 --> */}
        <div
          className="content flex gap-[3rem] w-[90%] mx-auto  border-l-2 relative pl-[2rem] pb-[2rem]">
          <div
            className="outercircle w-[2.5rem] h-[2.5rem] rounded-full border-2 border-dotted  absolute left-[-1.25rem] top-[-1.25rem] flex items-center justify-center">
            <div className="circle w-[1.3rem] h-[1.3rem] rounded-full bg-[#116466] absolute"></div>
          </div>
          <div>
            <div className="heading mb-2 font-[bold] md:text-[1.4rem] text-[1.1rem] text-[#116466]">Problem Solving
            </div>
            <p className="text-[.9rem]">I excel in problem-solving, utilizing analytical thinking,
              creativity, and persistence to tackle complex issues and deliver innovative solutions.
            </p>
            <div className='w-[90%] mx-auto flex gap-3 mt-3'>
              <Link to='https://www.geeksforgeeks.org/user/rg_rohit9431/'  target='_blank'><SiGeeksforgeeks className='text-[1.4rem] text-green-600' /></Link>
              <Link to='https://leetcode.com/u/rg_rohit9431/' target='_blank'><SiLeetcode className='text-[1.4rem] text-yellow-600' /></Link>
              <Link to='https://www.codechef.com/users/rg_48rohit' target='_blank'><SiCodechef className='text-[1.4rem] ' /></Link>
              <Link to='https://www.hackerrank.com/profile/9431rohitkumar' target='_blank'><SiHackerrank className='text-[1.4rem] text-green-600' /></Link>
            </div>
          </div>
        </div>

        {/* <!-- skill4 --> */}
        {
          visible &&
          (<div id="content2" className="content flex gap-[3rem] w-[90%]  mx-auto  border-l-2  relative pl-[2rem] pb-[2rem]">
            <div
              className="outercircle w-[2.5rem] h-[2.5rem] rounded-full border-2 border-dotted  absolute left-[-1.25rem] top-[-1.25rem] flex items-center justify-center">
              <div className="circle w-[1.3rem] h-[1.3rem] rounded-full bg-[#116466] absolute"></div>
            </div>
            <div>
              <div className="heading mb-2 font-[bold] md:text-[1.4rem] text-[1.1rem] text-[#116466]">Dsa Enthusiast
              </div>
              <p className="text-[.9rem] ">As a Data Structures and Algorithms enthusiast, I apply
                efficient coding techniques to optimize software performance and solve complex problems.
              </p>
            </div>
          </div>)

        }
        {/* <!-- skill5 --> */}
        {
          visible &&
          (<div id="content3" className="content flex gap-[3rem] w-[90%]  mx-auto  border-l-2 relative pl-[2rem] pb-[2rem]">
            <div
              className=" w-[2.5rem] h-[2.5rem] rounded-full border-2 border-dotted  absolute left-[-1.25rem] top-[-1.25rem] flex items-center justify-center">
              <div className="circle w-[1.3rem] h-[1.3rem] rounded-full bg-[#116466] absolute"></div>
            </div>
            <div>
              <div className="heading mb-2 font-[bold] md:text-[1.4rem] text-[1.1rem] text-[#116466]">Backend
                Development
              </div>
              <p className="text-[.9rem] ">I bring extensive expertise as a backend developer,
                specializing in architecting, developing, and fine-tuning server-side systems to ensure the
                seamless performance and reliability of web applications.
              </p>
              <li className='w-[90%] mx-auto mt-2'>I have expertise in Node.js, Express.js, MongoDB, and SQL, along with real-time communication using Socket.io. I am proficient in using Git/GitHub for version control.</li>
            </div>
          </div>)

        }
        {
          visible ? (<button className='text-[#116466] text-[1.2rem] animate-bounce' onClick={() => setVisible(!visible)}>Read Less</button>)
            : (
              <button className='text-[#116466] text-[1.2rem] animate-pulse hover:scale-[1.1] hover:underline hover:text-[#c0c0c0]' onClick={() => setVisible(!visible)}>Read More</button>
            )
        }
      </div>
    </div>
  )
}

export default Skill;