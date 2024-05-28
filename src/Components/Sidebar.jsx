import { useContext, useState } from "react";
import Button from "./Button"
import Icon from "./Icon";
import { Context } from "./Context";

const Sidebar = () => {
    const {prevPrompts, sendInput, menuState, setMenuState} = useContext(Context);

    const handleMenuState = () => {
        setMenuState(!menuState);
    }
    
  return (
    <div className={`inline-flex flex-col bg-purple-300 h-screen sidebar ${menuState ? 'w-[20%]' : 'w-[5%]'} px-6 py-8 ${!menuState && 'items-center'} ${menuState ? 'expanded' : 'collapsed'}`}>
        <Icon className="bx bx-menu text-2xl cursor-pointer" onClick={handleMenuState}/>
        <Button className="opacity-50 mt-16 bg-purple-600 rounded-2xl" paddings={`${menuState ? 'px-4 py-2': 'px-2 py-2 w-full rounded-full items-center justify-center'}`} title="New chat" icon={<Icon className="bx bx-plus "/>} State={menuState} />

        {
            menuState ? (
                <>
                    <p className="mt-8">Recent</p>
                    {
                        prevPrompts.length > 0 ? (
                            <div className="flex flex-col gap-2 mt-4 overflow-hidden">
                                {
                                    prevPrompts.map((item, index) => {
                                        return (
                                            <div onClick={() => {sendInput(item.prompt, item.thisResult)}} 
                                            key={index} className="flex items-center gap-4 cursor-pointer pl-4 pr-2 py-2 hover:bg-purple-400 rounded-full">
                                                <Icon className='bx bxs-message text-xl text-purple-800' />
                                                <p className="max-w-max whitespace-nowrap">{item.prompt}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            null
                        )
                    }
                </>
            ) : (null)
        }

        <div className="flex flex-col mt-auto">
            <Button icon={<Icon className="bx bx-help-circle text-xl" />} className="flex items-center gap-4 cursor-pointer hover:bg-purple-600 transition-all rounded-3xl" State={menuState} paddings="px-3 py-2">
                Help
            </Button>
            <Button icon={<Icon className="bx bxl-gmail text-xl"/>} className="flex items-center gap-4 cursor-pointer hover:bg-purple-600 transition-all rounded-3xl" State={menuState} paddings="px-3 py-2">
                Contact
            </Button>
            <Button icon={<Icon className="bx bx-cog text-xl" />} className="flex items-center gap-4 cursor-pointer hover:bg-purple-600 transition-all rounded-3xl" State={menuState} paddings="px-3 py-2">
                Settings
            </Button>
            {
                menuState ? (
                    <Button icon={<Icon className="bx bxs-circle text-sm text-purple-800" />} className="flex gap-4 mt-6 cursor-pointer px-3 py-2">
                        <div className="flex flex-col">
                            <p className="text-[0.8rem]">Beirut, Lebanon</p>
                            <p className="text-[0.8rem] text-purple-900">From your IP address</p>
                        </div>
                    </Button>
                ) : null
            }
        </div>
    </div>
  )
}

export default Sidebar