import Link from "next/link"
import Goto from "./Goto"
import Image from "next/image"
import profilepic from "../../public/me.png"
const LeftSidebar = () => {
    const imgStyle = "border w-[45px] h-[45px]"
    const linkImgStyle = "w-[25px] h-[25px] border border-gray-600"
    const svgDimensions = "30px"
    return (
        <div className="w-[250px] h-fit float-left">
            <div className="w-[250px] min-h-screen flex flex-col justify-between fixed pr-5">
                <div className="">
                    <Goto href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#fff"
                                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                            />
                        </svg>
                    </Goto>
                    <Goto href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M12 3L2 12h3v8h14v-8h3L12 3m0 5.75A2.25 2.25 0 0 1 14.25 11A2.25 2.25 0 0 1 12 13.25A2.25 2.25 0 0 1 9.75 11A2.25 2.25 0 0 1 12 8.75M12 15c1.5 0 4.5.75 4.5 2.25V18h-9v-.75c0-1.5 3-2.25 4.5-2.25Z"
                            />
                        </svg>
                        <p>Home</p>
                    </Goto>

                    <Goto href="/explore">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="m5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4h-2M9.53 9l-1.06 6h6l1.06-6h-6Z"
                            />
                        </svg>
                        <p>Explore</p>
                    </Goto>

                    <Goto href="/notifications">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M3 10q-.425 0-.712-.3Q2 9.4 2.05 9q.175-1.65.863-3.163q.687-1.512 1.812-2.712q.275-.275.7-.275q.425 0 .725.3q.275.275.275.675t-.275.725q-.875.95-1.412 2.062Q4.2 7.725 4.05 9q-.05.425-.337.712Q3.425 10 3 10Zm18 0q-.4 0-.7-.288q-.3-.287-.35-.712q-.15-1.275-.687-2.388Q18.725 5.5 17.85 4.55q-.275-.325-.275-.725q0-.4.3-.675q.3-.3.712-.3q.413 0 .688.275q1.125 1.2 1.813 2.712q.687 1.513.862 3.163q.05.4-.238.7q-.287.3-.712.3ZM5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q2 .5 3.25 2.112Q18 7.925 18 10v7h1q.425 0 .712.288q.288.287.288.712t-.288.712Q19.425 19 19 19Zm7-7.5ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-4-5h8v-7q0-1.65-1.175-2.825Q13.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10Z"
                            />
                        </svg>
                        <p>Notifications</p>
                    </Goto>

                    <Goto href="/messages">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="white"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m21 14l-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10m-7 1v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2"
                            />
                        </svg>
                        <p>Messages</p>
                    </Goto>

                    <Goto href="/bookmarks">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M3 23V7q0-.825.587-1.412Q4.175 5 5 5h10q.825 0 1.413.588Q17 6.175 17 7v16l-7-3Zm16-3V3H6V1h13q.825 0 1.413.587Q21 2.175 21 3v17Z"
                            />
                        </svg>
                        <p>Bookmarks</p>
                    </Goto>

                    <Goto href="/lists">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M8 17q.425 0 .713-.288Q9 16.425 9 16t-.287-.713Q8.425 15 8 15t-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm0-4q.425 0 .713-.288Q9 12.425 9 12t-.287-.713Q8.425 11 8 11t-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm0-4q.425 0 .713-.288Q9 8.425 9 8t-.287-.713Q8.425 7 8 7t-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm3 8h6v-2h-6Zm0-4h6v-2h-6Zm0-4h6V7h-6ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"
                            />
                        </svg>
                        <p>Lists</p>
                    </Goto>

                    <Goto href="/profile">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <g fill="white" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                                <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z" />
                            </g>
                        </svg>
                        <p>Profile</p>
                    </Goto>

                    <Goto href="/more">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgDimensions}
                            height={svgDimensions}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M6 14q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14Zm6 0q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm6 0q-.825 0-1.413-.588Q16 12.825 16 12t.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12q0 .825-.587 1.412Q18.825 14 18 14Z"
                            />
                        </svg>
                        <p>More</p>
                    </Goto>
                </div>

                <Link
                    className="relative flex justify-between items-center text-xl font-semibold my-5 transition ease-in-out"
                    href="/profile"
                >
                    <div className='flex items-center gap-2'>
                        <div className='w-[45px] h-[45px] rounded-full overflow-hidden'>
                            <Image src={profilepic} alt="profile picture me" />
                        </div>
                        <div className='text-sm'>
                            <p className='font-semibold'>Julius Morselt</p>
                            <p className='text-gray-400'>@juliusmorselt</p>
                        </div>
                    </div>
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M6 14q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14Zm6 0q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm6 0q-.825 0-1.413-.588Q16 12.825 16 12t.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12q0 .825-.587 1.412Q18.825 14 18 14Z"
                            />
                        </svg>
                </Link>
            </div>
        </div>    
    )
}

export default LeftSidebar
