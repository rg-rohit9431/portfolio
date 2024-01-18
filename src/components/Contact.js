import { Button } from '@react-email/components'
import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [formData, updatedFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        Message: ""
    })
    function changeHandler(event) {

        const { name, value } = event.target;
        updatedFormData(
            {
                ...formData, [name]: value
            });

    }
    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }
    return (
        <div id="contact"
            className="w-[100%] max-w-[1800px] h-fit mx-auto flex flex-col lg:flex-row justify-around items-center xl:max-h-[1000px]  mb-4 mt-1 rounded-xl p-2">
            <div className="left-content w-[90%] lg:w-[50%] mb-[3rem] h-[100%] rounded-lg p-[1rem] mx-auto">
                <div className="text-[1.7rem] md:text-[2.5rem] my-[1rem]">
                    <p className='text-[#116466]'>Let's Chat.</p>
                    <p>Tell Me About Your Projects.</p>
                </div>
                <div className="text-green my-[1rem]">Let's create something new together<span className=' animate-bounce'>🤘</span></div>
                <div
                    className="flex justify-evenly items-center  flex-col sm:flex-row w-100 md:w-[80%] h-fit my-[1rem] shadow-lg border-2 rounded-lg p-2">
                    <div className=" w-[25%] p-2 h-[100%]  rounded-md flex justify-around items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            className="bi bi-envelope" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                    </div>
                    <div className="p-2 flex flex-col items-center md:items-start">
                        <p className='text-[#116466] font-[500] text-[1.4rem]'>Mail Me At</p>
                        <Button
                            href="mailto:9431rohitkumar@gmail.com">
                            <p className="lg:text-[1.2rem] hover:text-[#116466] font-[500] text-[.8rem]">
                                9431rohitkumar@gmail.com</p>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="form w-[90%] lg:w-[45%] h-[100%]  mx-auto flex flex-col justify-evenly p-3 gap-[2rem]">
                <div className="text-[1.6rem] md:text-[2.2rem] text-green font-[500]">Send Us Some Message</div>
                <form onSubmit={submitHandler} className="flex flex-col justify-evenly gap-[1.4rem]" id="form">
                    <input type="text" placeholder="Full Name*"
                        className=" sm:w-[70%] h-[3rem] border-2 text-[1.1rem] capitalize text-black rounded-md p-2 shadow-lg" name="fullName"
                        value={formData.fullName}
                        onChange={changeHandler}
                        id="fullName" required />
                    <input type="email" placeholder="Email Us*"
                        className=" sm:w-[70%] h-[3rem] border-2 text-[1.1rem]  text-black rounded-md p-2 shadow-lg"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        id="email"
                        required />
                    <input type="text" placeholder="Subject*"
                        className=" sm:w-[70%] h-[3rem] border-2 text-[1.1rem] capitalize text-black rounded-md p-2 shadow-lg"
                        name="subject"
                        value={formData.subject}
                        onChange={changeHandler}
                        id="subject"
                        required />
                    <label htmlFor="Message" className="text-[1.2rem] text-[#116466] font-[500]">
                        Tell Me About Your Project
                    </label>
                    <textarea type="text" placeholder="Message*"
                        className=" sm:w-[70%] h-[10rem]  text-[1.1rem] capitalize border-2 text-black rounded-md p-2 shadow-lg"
                        name="Message"
                        id="Message"
                        value={formData.Message}
                        onChange={changeHandler}
                        required
                    />
                    <button
                        className="w-[10rem] rounded-md py-3 px-4 shadow-lg bg-[#116466] font-[500]">Send
                        Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;