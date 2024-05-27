import Button from "./Button"
import Icon from "./Icon";

const Sidebar = () => {
  return (
    <div className="inline-flex flex-col bg-purple-300 h-screen w-[20%] px-6 py-8">
        <Icon className="bx bx-menu text-2xl"/>
        <Button className="opacity-50 mt-16 bg-purple-600 rounded-2xl w-1/2" paddings="px-4 py-2" title="New chat" icon={<Icon className="bx bx-plus"/>} />

        <p className="mt-8">Recent</p>
        <div className="flex flex-col gap-2">

        </div>

        <div className="flex flex-col mt-auto">
            <Button icon={<Icon className="bx bx-help-circle text-xl" />} className="flex items-center gap-4 cursor-pointer hover:bg-purple-600 transition-all rounded-3xl" paddings="px-3 py-2">
                Help
            </Button>
            <Button icon={<Icon className="bx bxl-gmail text-xl"/>} className="flex items-center gap-4 cursor-pointer hover:bg-purple-600 transition-all rounded-3xl" paddings="px-3 py-2">
                Contact
            </Button>
            <Button icon={<Icon className="bx bx-cog text-xl" />} className="flex items-center gap-4 cursor-pointer hover:bg-purple-600 transition-all rounded-3xl" paddings="px-3 py-2">
                Settings
            </Button>
            <Button icon={<Icon className="bx bxs-circle text-sm text-purple-800" />} className="flex gap-4 mt-6 cursor-pointer px-3 py-2">
                <div className="flex flex-col">
                    <p className="text-[0.8rem]">Beirut, Lebanon</p>
                    <p className="text-[0.8rem] text-purple-900">From your IP address</p>
                </div>
            </Button>
        </div>
    </div>
  )
}

export default Sidebar