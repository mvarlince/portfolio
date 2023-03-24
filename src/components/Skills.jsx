import aws from "../assets/aws.png"
import css from "../assets/css.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import microsoftAzure from "../assets/microsoftAzure.png"
import node from "../assets/node.png"
import python from "../assets/python.png"
import reactImage from "../assets/reactImage.png"
import sql4 from "../assets/sql4.png"
import tailwind from "../assets/tailwind.png"
import typescript from "../assets/typescript.png"


export default function Skills() {

    const technologies = [
        {
            id: 1,
            src: javascript,
            title: 'Javascript',
            style: 'hover:shadow-yellow-500'
        },
        {
            id: 2,
            src: typescript,
            title: 'Typescript',
            style: 'hover:shadow-blue-500'
        },
        {
            id: 3,
            src: python,
            title: 'Python',
            style: 'hover:shadow-yellow-500'
        },
        {
            id: 4,
            src: sql4,
            title: 'SQL',
            style: 'hover:shadow-yellow-500'
        },
        {
            id: 5,
            src: html,
            title: 'HTML',
            style: 'hover:shadow-orange-500'
        },
        {
            id: 6,
            src: css,
            title: 'CSS',
            style: 'hover:shadow-blue-500'
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: 'hover:shadow-cyan-500'
        },
        {
            id: 8,
            src: node,
            title: 'Node Js',
            style: 'hover:shadow-green-500'
        },
        {
            id: 9,
            src: reactImage,
            title: 'React',
            style: 'hover:shadow-blue-500'
        },
        {
            id: 10,
            src: github,
            title: 'Github',
            style: 'hover:shadow-gray-500'
        },
        {
            id: 11,
            src: aws,
            title: 'AWS',
            style: 'hover:shadow-orange-500'
        },
        {
            id: 12,
            src: microsoftAzure,
            title: 'Microsoft Azure',
            style: 'hover:shadow-blue-500'
        },

    ]


    return (
        <>
            <div
                name="skills"
                className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
            >
                {/* add padding here */}
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-[25rem]">
                    <div>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                            Skills
                        </p>
                        <p className="py-6">These are the technologies I've worked with</p>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                        {technologies.map(({ id, src, title, style }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}