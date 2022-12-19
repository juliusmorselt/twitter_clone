const Messages = () => {
    const svgDimensions = "20px"
    return (
        <div className="w-[400px] h-[50px] fixed rounded-t-xl border-t border-x bottom-0 right-0 mr-5 bg-black flex justify-between p-5 items-center">
            <p className="font-bold text-lg">Messages</p>
            <div className="flex gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={svgDimensions}
                    height={svgDimensions}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="white"
                        d="M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9zM4.511 5l7.55 6.662L19.502 5H4.511zM21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={svgDimensions}
                    height={svgDimensions}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="white"
                        d="M6.7 11.7q-.275-.275-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.212q.175-.063.375-.063t.375.063q.175.062.325.212l4.6 4.6q.275.275.287.687q.013.413-.287.713q-.275.275-.7.275q-.425 0-.7-.275L12 7.825L8.1 11.7q-.275.275-.688.288Q7 12 6.7 11.7Zm0 6q-.275-.275-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.213q.175-.062.375-.062t.375.062q.175.063.325.213l4.6 4.6q.275.275.287.687q.013.413-.287.713q-.275.275-.7.275q-.425 0-.7-.275L12 13.825L8.1 17.7q-.275.275-.688.288Q7 18 6.7 17.7Z"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Messages
