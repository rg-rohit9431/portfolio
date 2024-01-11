import React, { useState } from 'react';

function Skill() {
  const [visible, setVisible] = useState(false);

  return (
    <div className='w-[100%] bg-[#232323] h-fit p-[2rem] my-[2rem]'>
      <div className='flex flex-col text-[#c0c0c0] max-w-[1800px] w-full xl:max-h-[1000px] relative items-center h-full mx-auto '>
        <p className="text-[2.4rem] my-[1rem] font-bold text-[#c0c0c0]  text-center w-[100%] mb-[1rem] uppercase ">Skills</p>
        <div className="flex flex-col items-center justify-center lg:w-[70%]  w-[90%] ">
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
              <p className="text-[.9rem] ">I possess strong leadership skills, guiding teams through
                challenges, fostering collaboration, and achieving project goals with effective
                communication.
              </p>
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
            </div>
          </div>

          {/* <!-- skill4 --> */}
          {
            visible ?
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
              :
              (<div></div>)
          }
          {/* <!-- skill5 --> */}
          {
            visible ?
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
                </div>
              </div>)
              :
              (<div></div>)
          }
          {
            visible ? (<button className='text-[#116466] text-[1.2rem] animate-bounce' onClick={() => setVisible(!visible)}>Read Less</button>)
              : (
                <button className='text-[#116466] text-[1.2rem] animate-pulse hover:scale-[1.1] hover:underline hover:text-[#c0c0c0]' onClick={() => setVisible(!visible)}>Read More</button>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default Skill;