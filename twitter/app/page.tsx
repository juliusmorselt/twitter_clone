import React from "react"
import WhatsHappening from "./components/WhatsHappening"
import Tweet from "./components/Tweet"

const Home = () => {
    const tweets = [...Array(10)]
    return (<>
        <div className="w-[600px] border-x border-x-gray-600">
            <div className="w-[600px] flex justify-between px-5 py-2 -mt-10 fixed items-center bg-black z-50">
                <h1 className="text-2xl font-semibold">Home</h1>
                <img src="" className="w-[30px] h-[30px] border" />
            </div>
            <WhatsHappening />
            
            {tweets.map((_) => (
                <Tweet />
            ))}
        </div>
    </>)
}

export default Home