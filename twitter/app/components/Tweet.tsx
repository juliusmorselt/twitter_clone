import Image from "next/image"
import profilepic from "../../public/me.png"
//import Tweets from "../getData"
import Quotes from "../Quotes"
import { randomInt } from "crypto"
const Tweet = () => {
    var unvar = "font-bold text-white flex items-center gap-1"
    var grayedout = "text-gray-500"
    var tweet = "text-white"
    var options = "text-gray-500 mt-2 flex gap-3 items-center text-center"
    var optionstext = "text-gray-500 text-sm"
    const svgDimensions = "20px"
    var i = Math.floor(100 * Math.random())
    var o = Math.floor(3 * Math.random())
    const timepassed = randomInt(35)
    const timeunit = new Array()
    timeunit[1] = 'h'
    timeunit[2] = 'm'
    timeunit[3] = 's'
    const view = randomInt(23145)
    const reply = randomInt(5325)
    const retweet = randomInt(15354)
    const like = randomInt(23145)
    // let what = Tweets.data['weather'][0]['main']
    return (
        <div className="w-full flex gap-5 py-5 px-5 border-b border-b-gray-600">
            <div className="min-w-[48px] h-[48px] rounded-full relative overflow-hidden">
                <Image
                    src={profilepic}
                    alt="profile picture me"
                    className="w-[48px] h-[48px] rounded-full"
                />
            </div>
            <div className="w-full">
                {/* Upper */}
                <div className="flex justify-between">
                    {/* Username, Usertag and Time */}
                    <div className="flex gap-2">
                        <p className={unvar}>
                            Username
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#60a5ff"
                                        d="m6.7 19.3l-2.75-.6q-.375-.075-.6-.388q-.225-.312-.175-.687L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.687q.225-.313.6-.388l2.75-.6l1.45-2.45q.2-.325.55-.425q.35-.1.7.025l2.6 1.1l2.6-1.1q.35-.125.7-.025t.55.425L17.3 4.7l2.75.6q.375.075.6.388q.225.312.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.687q-.225.313-.6.388l-2.75.6l-1.45 2.45q-.2.325-.55.425q-.35.1-.7-.025l-2.6-1.1l-2.6 1.1q-.35.125-.7.025t-.55-.425Zm3.55-4.45q.275.275.7.275q.425 0 .7-.275l4.25-4.25q.3-.3.3-.713q0-.412-.3-.712t-.712-.3q-.413 0-.713.3L10.95 12.7L9.5 11.275q-.3-.275-.712-.263q-.413.013-.688.288q-.275.275-.275.7q0 .425.275.7Z"
                                    />
                                </svg>
                            </span>
                        </p>
                        <p className={grayedout}>@UserTag</p>
                        <p className={grayedout}>· {timepassed}{timeunit[o]}</p>
                    </div>

                    {/* ... */}
                    <p>...</p>
                </div>

                {/* Tweet Itself */}
                <div className={tweet}>
                    {Quotes[i]}
                    {/* <Tweets/> */}
                </div>
                {/* Options */}
                <div className="flex justify-between w-5/6">
                    <div className={options}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#6b7380"
                                d="M17 1h-2a1 1 0 0 0-1 1v16.992h4V2a1 1 0 0 0-1-1zm-6 6H9a1 1 0 0 0-1 1v10.992h4V8a1 1 0 0 0-1-1zm-6 6H3a1 1 0 0 0-1 1v4.992h4V14a1 1 0 0 0-1-1z"
                            />
                        </svg>
                        <p className={optionstext}>{view}</p>
                    </div>
                    <div className={options}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#6b7380"
                                d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z"
                            />
                        </svg>
                        <p className={optionstext}>{reply}</p>
                    </div>
                    <div className={options}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 528 448"
                        >
                            <path
                                fill="#6b7380"
                                d="m486 154l-30 21v-68q0-35-25-60.5T371 21H157q-35 0-60 25.5T72 107q0 9 6 15t15 6q10 0 16-6t6-15q0-18 12.5-30.5T157 64h214q17 0 29.5 12.5T413 107v66l-30-22q-19-11-29 7q-12 19 6 30l75 47l76-47q17-11 7-30q-15-15-32-4zm-51 102q-10 0-16 6t-6 15q0 18-12.5 30.5T371 320H157q-17 0-29.5-12.5T115 277v-66l30 22q2 0 6 1t6 1q8 0 17-9q12-19-6-30l-75-47l-76 47q-17 11-7 30q11 17 30 7l30-22v66q0 35 25 60.5t60 25.5h214q35 0 60-25.5t25-60.5q1-9-4.5-15t-14.5-6z"
                            />
                        </svg>
                        <p className={optionstext}>{retweet}</p>
                    </div>
                    <div className={options}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="none"
                                stroke="#6b7380"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="4"
                                d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"
                            />
                        </svg>
                        <p className={optionstext}>{like}</p>
                    </div>
                    <div className={options}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#6b7380"
                                d="M12 15.575q-.2 0-.375-.063q-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.712-.288q.438-.012.713.263L11 12.15V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v7.15l1.875-1.875q.275-.275.713-.263q.437.013.712.288q.275.275.275.7q0 .425-.275.7l-3.6 3.6q-.15.15-.325.212q-.175.063-.375.063ZM6 20q-.825 0-1.412-.587Q4 18.825 4 18v-2q0-.425.287-.713Q4.575 15 5 15t.713.287Q6 15.575 6 16v2h12v-2q0-.425.288-.713Q18.575 15 19 15t.712.287Q20 15.575 20 16v2q0 .825-.587 1.413Q18.825 20 18 20Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet
