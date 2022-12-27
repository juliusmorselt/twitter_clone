import React from "react"
import Image from "next/image"
import exploreimg from "../../public/exploreimg.jpg"
import Trend from "../components/Trend"
import Link from "next/link"
import WhatsHappeningBig from "../components/WhatsHappeningBig"
import Tweet from "../components/Tweet"
import { randomInt } from "crypto"
const Todo = () => {
    const trendsArr = [...Array(4)]
    const whatshappeningarray = [...Array(5)]
    const amount = randomInt(100)
    const tweets = [...Array(amount)]
    return (
        <>
            <div className="w-[600px] border-x border-x-gray-600">
                {/* Search */}
                <div className="fixed z-50 bg-black flex justify-between items-center p-2 min-w-[600px]">
                    <input
                        type="text"
                        name="search"
                        placeholder="🔍Search Twitter"
                        className="min-h-[40px] min-w-[550px] rounded-full bg-componentbg p-2 my-5"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="white"
                            d="m9.25 22l-.4-3.2q-.325-.125-.612-.3q-.288-.175-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375q.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3q.287.175.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.337v.675q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375q-.3.175-.6.3l-.4 3.2Zm2.8-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438q-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588q.662-.387 1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.738q.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.963q-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587q-.663.388-1.213.938L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75q-.05.375-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.962q.662.388 1.437.588Z"
                        />
                    </svg>
                </div>

                {/* Image */}
                <div className="relative w-full min-h-[350px] overflow-hidden rounded-md">
                    <div className="absolute text-white bottom-0 mb-5 ml-3">
                        <p>Cars</p>
                        <h1 className="font-bold text-3xl">
                            This car is good!
                        </h1>
                    </div>
                    <Image src={exploreimg} alt="car." />
                </div>

                {/* Trends */}
                <div>
                    {trendsArr.map((_) => (
                        <Trend />
                    ))}
                    <Link href="../trends/">
                        <p className="text-blue-500 px-5 py-2 hover:bg-gray-800">
                            Show more
                        </p>
                    </Link>
                </div>

                {/* Whats happening */}
                <div className="p-5">
                    <h1 className="font-bold pb-5 text-white text-2xl">
                        Whats happening
                    </h1>
                    {whatshappeningarray.map((_) => (
                        <WhatsHappeningBig />
                    ))}
                </div>

                <div className="p-5">
                    <h1 className="font-bold pb-5 text-white text-2xl">
                        Tweets
                    </h1>
                    {tweets.map((_) => (
                        <Tweet />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Todo
