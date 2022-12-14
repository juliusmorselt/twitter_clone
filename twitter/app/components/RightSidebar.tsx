import Trends from "./Trends"
import WhoToFollow from "./WhoToFollow"
const RightSidebar = () => {
    return(
        <div className="min-w-[350px] h-screen border-l border-l-white pl-5">
             <div className="fixed z-50 bg-black">
                <input 
                    type="text" 
                    name="search" 
                    placeholder="🔍Search Twitter" 
                    className="h-[40px] w-[329px] rounded-full bg-componentbg p-2 my-5"
                />
            </div>
            <Trends />
            <WhoToFollow />
        </div>
    )
}

export default RightSidebar