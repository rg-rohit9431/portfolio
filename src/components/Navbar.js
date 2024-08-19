
import { Button } from "@react-email/components";

const Navbar = () => {
    

    return (
        <div className="flex justify-between items-center w-[100%] md:w-11/12 max-w-[1400px] h-[80px] shadow-md rounded-md mx-auto bg-[white] fixed top-0 left-[50%] translate-x-[-50%]  z-50 ">
            <div className="flex md:w-[25%] h-full justify-between gap-2 items-center">
                <p className="ml-3 text-xl filter drop-shadow-md font-[500] font-[cursive] text-[#232323]">RohiT Gupta</p>
                <Button href="mailto:9431rohitkumar@gmail.com" >
                    <p className="px-4 py-3 text-center font-[500] shadow-md rounded-md hidden md:block hover:border-2 hover:scale-[1.1] text-[#232323] ">
                        Hire Now</p>
                </Button>
            </div>

            {/* <div className="flex justify-around items-center md:w-[25%] ">
                <Link to='/project' onClick={handleProjectLinkClick} className='px-3 py-2 text-xl font-[500] text-[#232323]'><button type='button' >Project</button></Link>
                {color ? (<span onClick={() => changeColor(color)}><CiLight className="text-[2rem] m-3 cursor-pointer text-[#232323]" /></span>)
                    : (<span onClick={() => changeColor(color)} > <CiDark className="text-[2rem] m-3 cursor-pointer fill-current text-[#232323]" /></span>)}
            </div> */}
        </div >
    );

}

export default Navbar;