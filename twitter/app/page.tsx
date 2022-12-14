import React from "react"
import WhatsHappening from "./components/WhatsHappening"
import Tweet from "./components/Tweet"
const Home = () => {
    return (<>
        <div className="w-[600px]">
            <div className="w-[600px] flex justify-between px-5 py-2 -mt-10 fixed items-center bg-black z-50">
                <h1 className="text-2xl font-semibold">Home</h1>
                <img src="" className="w-[30px] h-[30px] border" />
            </div>
            <WhatsHappening />
            <Tweet />
        </div>
    </>)
}

export default Home