import valentine from '../assets/portfolio/valentine.webp'
import taskhero from '../assets/portfolio/taskhero.webp'
import affirmation from '../assets/portfolio/affirmation.webp'
import lineupwiz from '../assets/portfolio/lineupwiz.webp'
import hex from '../assets/portfolio/hex.webp'


export default function Projects() {

  const portfolios = [
    {
      id: 1,
      src: lineupwiz,
      codeLink: "https://github.com/mvarlince/lineupwiz",
      demoLink: "https://lineupwiz.web.app"
    },
    {
      id: 2,
      src: valentine,
      codeLink: "https://github.com/mvarlince/valentine",
      demoLink: "https://valentine-app-frontend-vm.web.app/"
    },
    {
      id: 3,
      src: affirmation,
      codeLink: "https://github.com/mvarlince/affirmation",
      demoLink: ""
    },
    {
      id: 4,
      src: taskhero,
    },
    {
      id:5,
      src: hex,
      codeLink: 'https://github.com/mvarlince/portfolio-random-hex-generator',
      demoLink: 'https://portfolio-random-hex-generator.web.app/'
    }
  ]

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gra y-500">
            Projects
          </p>
          <p className="py-6 text-2xl">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Demo </a>
                <a href={codeLink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Code </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}