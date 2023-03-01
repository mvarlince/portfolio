import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import headshot from "../assets/portfolio/headshot.png"
import { Link } from "react-scroll"



export default function Home () {
    return (
        <>
        <div name="home" 
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
            >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white"> 
                        full stack software developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md text-3xl">
                    Hey there!  I am a proficient software engineer with experience in writing clean and scalable code. I have a knack for problem-solving, a talent for clear communication, and a team player attitude.                      </p>
                    <div>
                        <Link to="portfolio" 
                                smmoth 
                                duration={800}
                            className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} 
                                                            className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
            <div>
                <img src={headshot} alt="my profile"className="rounded-2xxl mx-auto w-2/3 md:w-full"/>
            </div>
            </div>

        </div>
        </>
    )
}