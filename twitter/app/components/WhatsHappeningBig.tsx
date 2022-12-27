const WhatsHappeningBig = () => {
    const whathappened = "bg-blue-500 p-2 flex items-center gap-3"
    const football = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
        >
            <g fill="none" stroke-width="1.5">
                <g
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    clip-path="url(#svgIDa)"
                >
                    <path d="M17.736 20.192c4.524-3.168 5.623-9.404 2.455-13.928C17.024 1.74 10.788.641 6.264 3.81C1.74 6.976.641 13.212 3.808 17.736c3.168 4.524 9.404 5.623 13.928 2.456Zm0 0L6.264 3.809" />
                    <path d="M19.577 5.473c-3.77 5.896-8.508 9.214-16.302 11.415" />
                    <path d="M13.06 2.056c.413 5.24 3.392 9.494 8.646 12.35M2.293 9.595c4.783 2.18 7.761 6.434 8.647 12.349" />
                </g>
                <defs>
                    <clipPath id="svgIDa">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                </defs>
            </g>
        </svg>
    )

    return (
        <div className="my-3">
            <div className="flex justify-between mt-5 mb-2">
                <p className="font-bold">NBA</p>
                <p>Today: 1:00 AM</p>
            </div>
            <div className="font-bold rounded-md overflow-hidden">
                <p className={whathappened}>
                    {football}
                    Houston Rockets
                </p>
                <p className={whathappened}>
                    {football}
                    Chicago Bulls
                </p>
            </div>
        </div>
    )
}

export default WhatsHappeningBig
