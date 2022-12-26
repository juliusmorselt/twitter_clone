import { randomInt } from "crypto"
import Image from "next/image"
import profilepic from "../../public/me.png"

const extraTweets = randomInt(42)
const WhatsHappening = () => {
    const svgDimensions = "20"
    const svgClass = "hover:cursor-pointer"
    return (
        <div className="mt-10 border-b border-b-gray-600">
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={svgDimensions}
                        height={svgDimensions}
                        className={svgClass}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#60a5ff"
                            d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h5v2H5v14h14v-5.35l2 2V19q0 .825-.587 1.413Q19.825 21 19 21Zm1-4l3-4l2.25 3l3-4L18 17Zm15.55-3.6l-3.1-3.1q-.525.35-1.125.525q-.6.175-1.275.175q-1.85 0-3.15-1.312q-1.3-1.313-1.3-3.188q0-1.875 1.313-3.188Q14.225 2 16.1 2q1.875 0 3.188 1.312Q20.6 4.625 20.6 6.5q0 .675-.2 1.3t-.5 1.15L22.95 12ZM16.1 9q1.05 0 1.775-.725q.725-.725.725-1.775q0-1.05-.725-1.775Q17.15 4 16.1 4q-1.05 0-1.775.725Q13.6 5.45 13.6 6.5q0 1.05.725 1.775Q15.05 9 16.1 9Z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={svgDimensions}
                        height={svgDimensions}
                        className={svgClass}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#60a5ff"
                            d="M8.5 14h1q.425 0 .713-.288q.287-.287.287-.712v-1h-1v1h-1v-2h2q0-.425-.287-.713Q9.925 10 9.5 10h-1q-.425 0-.712.287q-.288.288-.288.713v2q0 .425.288.712q.287.288.712.288Zm3 0h1v-4h-1Zm2 0h1v-1.5H16v-1h-1.5V11h2v-1h-3ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={svgDimensions}
                        height={svgDimensions}
                        className={svgClass}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#60a5ff"
                            d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5S5.5 6.83 5.5 6S4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5s1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={svgDimensions}
                        height={svgDimensions}
                        className={svgClass}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#60a5ff"
                            d="M14.36 14.23a3.76 3.76 0 0 1-4.72 0a1 1 0 0 0-1.28 1.54a5.68 5.68 0 0 0 7.28 0a1 1 0 1 0-1.28-1.54ZM9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={svgDimensions}
                        height={svgDimensions}
                        className={svgClass}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#60a5ff"
                            d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={svgDimensions}
                        height={svgDimensions}
                        className={svgClass}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 20 20"
                    >
                        <g
                            fill="#60a5ff"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path d="M10 11.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Zm0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" />
                            <path d="M2.5 8.123C2.5 12.366 6.882 19.5 10 19.5c3.118 0 7.5-7.134 7.5-11.377C17.5 3.917 14.146.5 10 .5S2.5 3.917 2.5 8.123Zm13 0c0 3.28-3.745 9.377-5.5 9.377s-5.5-6.097-5.5-9.377C4.5 5.013 6.967 2.5 10 2.5s5.5 2.513 5.5 5.623Z" />
                        </g>
                    </svg>
                </div>
                <button className="bg-blue-400 w-[100px] h-[40px] font-semibold rounded-full">
                    <p className="text-gray-300">Tweet</p>
                </button>
            </div>
            <div className="h-[50px] border-t border-t-gray-600 flex justify-center items-center hover:bg-slate-400 hover:cursor-pointer">
                <p>Show {extraTweets} Tweets</p>
            </div>
        </div>
    )
}

export {WhatsHappening, extraTweets}
