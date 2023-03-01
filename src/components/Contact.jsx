export default function Contact() {
    return (
        <>
            <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white ">
                <div className="flex flex-col p-4 justify-center max-w-screen-lg  max-auto h-full">
                    <div className="pb-8 align-content: center">
                        <p className="text-5xl font-bold inline border-b-4 border-gray-500">Contact</p>
                        <p className="text-4xl py-6">Submit the form below to get in touch with me</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <form action="https://getform.io/f/1a7a43f1-9d34-452f-b13c-9a6f0d8b6600"                     
                                method="POST"
                                className="flex flex-col w-full md:w-1/2">
                            <input type="text"
                                name="name"
                                placeholder="Name"
                                className="p-2 bg-transparent border-2 rounded-md text-white
                        focus:outline-none"/>
                            <input type="text"
                                name="email"
                                placeholder="Email"
                                className="my-4 p-2 bg-transparent border-2 rounded-md text-white
                        focus:outline-none"/>
                            <textarea name="message"
                                placeholder="Message"
                                rows="10"
                                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                            </textarea>
                            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                                Let's talk
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}