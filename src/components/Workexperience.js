import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'SnackBAE',
      location: 'Kolkata, West Bengal',
      date: 'May 2024 – July 2024',
      responsibilities: [
        'Led a team in developing responsive web applications, enhancing user engagement.',
        'Collaborated with UX/UI designers and backend engineers to ensure seamless integration, resulting in high customer satisfaction.',
      ],
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      company: 'SnackBAE',
      location: 'Kolkata, West Bengal',
      date: 'March 2024 – April 2024',
      responsibilities: [
        'Developed dynamic, responsive web applications with React.js, significantly enhancing user engagement.',
        'Utilized Redux for efficient state management, improving performance and scalability.',
      ],
    },
  ];

  return (
    <div id="work-experience" className="w-full px-4 pb-16 h-fit bg-gray-50">
      <p className="text-[2.4rem] font-bold text-center my-8 uppercase ">Work Experience</p>
      
      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="relative p-8 transition-transform transform bg-white shadow-lg rounded-xl hover:-translate-y-2"
          >
            <div className="absolute -left-3 -top-3 bg-[#116466] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
              {experience.id}
            </div>
            <h3 className="text-2xl font-semibold text-[#116466] mb-1">
              {experience.title} at {experience.company}
            </h3>
            <p className="mb-4 text-gray-500">{experience.date} | {experience.location}</p>
            <ul className="space-y-1 text-black list-disc list-inside">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
