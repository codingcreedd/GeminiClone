import { useContext } from "react"
import Icon from "./Icon"
import cards from "./cards"
import { Context } from "./Context"

const Nav = () => {
    return (
        <nav className="flex justify-between items-center">
            <div className="flex items-center font-bold text-purple-800">
                {/* <img src="../src/assets/Colorful_Modern_Infinity_Technology_Free_Logo-removebg-preview.png" className="w-[70px] h-[70px]" alt="Miro Logo" /> */}
                <p className="text-2xl">MiroGPT</p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex cursor-pointer hover:bg-purple-400 transition-all gap-1 items-center bg-purple-300 pl-2 py-2 pr-4 rounded-2xl">
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
        <div className="px-4 py-4 max-w-[250px] max-h-[250px] flex flex-col content-between bg-purple-300 rounded-lg cursor-pointer hover:bg-purple-500 transition-all">
            <div className="mb-32">{description}</div>
            <div className="flex ml-auto">
                <Icon className={iconClass} />
            </div>
        </div>
    )
}

const Main = () => {

  const {input, setInput, recentPrompt, showResult, loading, result, sendInput, menuState} = useContext(Context);


  return (
    <div className={`h-screen ${menuState ? 'w-[80%]' : 'w-[95%]'} px-8 py-8 ff flex flex-col`}>
        <Nav />
        {
            !showResult ? (
                <div className="flex flex-col mt-24 items-center mx-52">
                    <div>
                        <div className="bg-clip-text mb-32">
                            <p className="text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-900">Hello, Guest</p>
                            <p className="text-7xl text-purple-400 sans">How can I help you today?</p>
                        </div>

                        <div className="flex gap-4">
                            {
                                cards.map((card) => {
                                    return <Card description={card.description} iconClass={card.iconClass} />
                                })
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-6 mx-52 mt-14 overflow-scroll scroll-smooth hiddenScroll">
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

        <div className="flex justify-between mt-auto mx-52 items-center bg-purple-300 px-6 py-2 rounded-full">
            <input type="text" name="prompt" placeholder="Enter a prompt here"
            className=" pl-4 py-4 w-[90%] outline-none bg-purple-300 placeholder-purple-800 text-purple-800"
            onChange={(e) => setInput(e.target.value)} value={input}
            />
            <div className="flex gap-4 text-2xl">
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
        <div className="text-sm mx-auto mt-8 text-purple-600">Miro will always display the most accurate info, it's the best chat AI out there, so don't double check its responses. Bruv I'm kidding</div>
    </div>
  )
}

export default Main