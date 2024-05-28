import { useContext } from "react"
import Icon from "./Icon"
import cards from "./cards"
import { Context } from "./Context"

const Nav = () => {

    const {setHideSidebar} = useContext(Context);

    return (
        <nav className="flex justify-between items-center">
            <div className="flex items-center font-bold text-purple-800 md:gap-4 gap-2">
                <Icon className="bx bx-menu text-2xl cursor-pointer md:hidden" onClick={() => {setHideSidebar(false)}} />
                <p className="lg:text-2xl text-xl">MiroGPT</p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="hidden sm:flex cursor-pointer hover:bg-purple-400 transition-all gap-1 items-center bg-purple-300 pl-2 py-2 pr-4 rounded-2xl">
                    <img src="../src/assets/Colorful_Modern_Infinity_Technology_Free_Logo-removebg-preview.png" className="w-[20px] h-[20px]" alt="Miro Logo" />
                    <p className="text-[0.8rem] font-bold text-purple-800">Try Miro Advanced</p>
                </div>
                <img 
                className="w-[40px] h-[40px] object-contain border border-purple-800 rounded-full"
                src="../src/assets/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" />
            </div>
        </nav>
    )
}

const Card = ({description, iconClass}) => {
    return (
        <div className="px-4 py-4 md:max-w-[250px] md:max-h-[250px] flex flex-col content-between bg-purple-300 rounded-lg cursor-pointer hover:bg-purple-500 transition-all max-md:w-full">
            <div className="mb-32">{description}</div>
            <div className="flex ml-auto">
                <Icon className={iconClass} />
            </div>
        </div>
    )
}

const Main = () => {

  const {input, setInput, recentPrompt, showResult, loading, result, sendInput, menuState, hideSidebar, resultFinished} = useContext(Context);


  return (
    <div className={`h-screen ${menuState ? 'max-lg:w-[75%] w-[80%]' : 'lg:w-[95%] w-[90%]'} ${hideSidebar && 'full'} px-8 py-8 ff flex flex-col max-sm:pb-8`}>
        <Nav />
        {
            !showResult ? (
                <div className="flex flex-col mt-14 items-center xl:mx-52 md:mx-20 lg:mx-24">
                    <div>
                        <div className="bg-clip-text md:mb-12 mb-14">
                            <p className="xl:text-7xl text-4xl md:text-5xl lg:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-900">Hello, Guest</p>
                            <p className="xl:text-7xl text-4xl md:text-5xl lg:text-6xl  text-purple-400 sans">How can I help you today?</p>
                        </div>

                        <div className="gap-4 lg:flex lg:text-md text-sm w-full max-md:flex max-md:flex-col max-md:gap-4 md:grid md:grid-cols-2">
                            {
                                cards.map((card) => {
                                    return <Card description={card.description} iconClass={card.iconClass} />
                                })
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-6 xl:mx-52 md:mx-20 lg:mx-24 mt-14 overflow-auto hiddenScroll">
                    <div className="flex gap-4 items-center">
                        <img className="w-[40px] h-[40px] object-contain border border-purple-800 rounded-full"
                        src="../src/assets/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                        
                    <div className="flex gap-4">
                        <img src="../src/assets/Colorful_Modern_Infinity_Technology_Free_Logo-removebg-preview.png" className="w-[50px] h-[50px]" alt="Miro Logo" />
                        {
                            !loading ? (
                                <div dangerouslySetInnerHTML={{ __html: result }} />
                            ) : (
                                <div className="w-[80%]">
                                    <hr className="mb-4 border-none h-4 rounded-sm" />
                                    <hr className="mb-4 border-none h-4 rounded-sm"/>
                                    <hr className="mb-4 border-none h-4 rounded-sm"/>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        }

        <div className="flex-grow"></div>
        <div className="flex justify-between xl:mx-52 md:mx-20 lg:mx-24 items-center mt-auto max-lg:mt-8  bg-purple-300 px-6 py-2 rounded-full">
            <input type="text" name="prompt" placeholder="Enter a prompt here"
            className=" md:pl-4 md:py-4 w-[90%] outline-none bg-purple-300 placeholder-purple-800 text-purple-800"
            onChange={(e) => {setInput(e.target.value);}} value={input} readOnly={resultFinished}
            />
            <div className="flex md:gap-4 text-2xl">
                <Icon className="bx bx-image-add cursor-pointer p-2" />
                <Icon className="bx bx-microphone cursor-pointer p-2" />
                {
                    input ? (
                        <Icon className="bx bx-send cursor-pointer transition-all hover:bg-purple-400 rounded-full p-2" onClick={() => sendInput()} />
                    ) : (
                        null
                    )
                }
            </div>
        </div>
        <div className="hidden max-sm:block text-white">.</div>
        {/* <div className="md:text-sm text-[0.7rem] mx-auto mt-8 text-purple-600">Miro will always display the most accurate info, it's the best chat AI out there, so don't double check its responses. Bruv I'm kidding</div> */}
    </div>
  )
}

export default Main