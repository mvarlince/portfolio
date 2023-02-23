import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import { BsFillPersonLinesFill} from "react-icons/bs"

export default function(){

    const links = [
        {id: 1,
        child:(
            <>
            Linkedin <FaLinkedin size={30} />
            </>
            ),   
        href:'https://www.linkedin.com/in/varlince',
        style: 'rounded-tr-md'
        },
//
        {id: 2,
            child:(
                <>
                Github <FaGithub size={30} />
                </>
                ),   
        href:'https://www.github.com/mvarlince',
            },
//
        {id: 3,
            child:(
                <>
                Mail <HiOutlineMail size={30} />
                </>
                ),   
        href:'mailto:varlincemeran@gmail.com',
            },
//           
        {id: 4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
                ),   
        href: '/Varlince_Meran_Resume.pdf',
        style: 'rounded-br-md',
        download: true
            }
    ]

    return(
        <>
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map( ({id, child, href, style, download} ) => {
                    return  <li key={id} className={"flex justify-between items-centerw-40 h-14 px-4 ml-[-80px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +" " + style} >
                    <a href={href} 
                        className="flex justify-between items-center  w-full text-white"
                        download={download}
                        target="_blank"
                        rel="noreferrer">
                    {child} 
                    </a>
                </li>
                } )}
               
            </ul>
        </div>
        </>
    )
}