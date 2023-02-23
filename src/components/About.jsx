export default function About () {
    return(
        <>
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>

                <p className="text-xl mt-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse assumenda alias unde accusantium, deserunt laborum, exercitationem culpa quibusdam eos non inventore eum qui facilis modi aliquid at perspiciatis sequi!
                </p>
                <br/>
                <p className="text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestias labore non debitis hic exercitationem harum! Laudantium dolor iste, atque consequatur adipisci dolores labore laboriosam ratione facere nisi? Error, maxime! </p>
            </div>
        </div>
        </>
    )
}