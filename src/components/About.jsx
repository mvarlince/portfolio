export default function About () {
    return(
        <>
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full">
                <div className="">
                    <p className="text-5xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>

                <p className="text-3xl mt-20">
                I love Japanese cars 🏎️, soccer ⚽️ and music 🎶🎹.
                </p> 
                <br/>
                <p className="text-3xl tracking-wider"> 
                I have expertise in various programming languages, web technologies, and cloud computing. I excel at providing technical support and delivering high-quality solutions.
                </p>
                <br/>
                <p className="text-3xl tracking-wider">
                I'm excited to tackle new challenges and make a difference in the tech world. Let's connect and see what we can build together!
                </p>
            </div>
        </div>
        </>
    )
}