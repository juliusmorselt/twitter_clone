import Image from "next/image"
import profilepic from "../../public/me.png"

const Tweet = () => {
    return(
        <div className="w-full flex gap-5 px-5">
            <div className="min-w-[48px] h-[48px] rounded-full relative overflow-hidden">
                <Image 
                    src={profilepic} 
                    alt="profile picture me"
                    className="w-[48px] h-[48px] rounded-full"
                />
            </div>
            <div className="border w-full">

            </div>
        </div>
    )
}

export default Tweet