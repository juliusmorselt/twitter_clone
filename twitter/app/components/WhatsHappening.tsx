import Image from "next/image"
import profilepic from "../../public/me.png"

const WhatsHappening = () => {
    return (
        <div className="mt-10 mb-5 border-b">
            <div className="flex pt-5 gap-5 w-[85%] p-5">
                <div className="rounded-full relative w-[48px] h-[48px] overflow-hidden">
                    <Image src={profilepic} alt="profile picture me" />
                </div>
                <input
                    type="text"
                    placeholder="What's happening?"
                    className="text-2xl bg-transparent border-none"
                />
            </div>
            <div className="flex justify-between my-5 px-5 items-center">
                <div className="h-[20px] gap-5 grid grid-cols-6 ml-16">
                    <img src="" className="w-[20px] h-[20px] border" />
                    <img src="" className="w-[20px] h-[20px] border" />
                    <img src="" className="w-[20px] h-[20px] border" />
                    <img src="" className="w-[20px] h-[20px] border" />
                    <img src="" className="w-[20px] h-[20px] border" />
                    <img src="" className="w-[20px] h-[20px] border" />
                </div>
                <button className="bg-blue-400 w-[100px] h-[40px] font-semibold rounded-full">
                    <p className="text-gray-300">Tweet</p>
                </button>
            </div>
            <div className="h-[50px] border-x border-t flex justify-center items-center hover:bg-slate-400 hover:cursor-grab">
                <p>Show 52 Tweets</p>
            </div>
        </div>
    )
}

export default WhatsHappening
