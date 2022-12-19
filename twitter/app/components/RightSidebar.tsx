import Trends from "./Trends"
import WhoToFollow from "./WhoToFollow"
import Link from "next/link"
const RightSidebar = () => {
    return (
        <div className="max-w-[350px] h-screen pl-5">
            <div className="fixed z-50 bg-black">
                <input
                    type="text"
                    name="search"
                    placeholder="🔍Search Twitter"
                    className="h-[40px] w-[329px] rounded-full bg-componentbg p-2 my-5"
                />
            </div>
            <Trends />
            <WhoToFollow/>

            {/* Extra Stuff */}
            <div className="text-xs text-gray-500 grid grid-cols-3 gap-2">
                <Link href="https://twitter.com/en/tos">Terms of Service</Link>
                <Link href="https://twitter.com/en/tos">Privacy Policy</Link>
                <Link href="https://twitter.com/en/tos">Cookie Policy</Link>
                <Link href="https://twitter.com/en/tos">Accessability</Link>
                <Link href="https://twitter.com/en/tos">Ads Info</Link>
                <Link href="https://twitter.com/en/tos">More...</Link>
                <Link href="https://twitter.com/en/tos">©2022 Twitter, Inc</Link>
            </div>
        </div>
    )
}

export default RightSidebar

