const Person = () => {
    return(
        <div className='flex justify-evenly py-3'>
            <div className="rounded-full w-[50px] h-[50px] bg-blue-500 relative"></div>
            <div className="">
                <p className="text-white font-semibold">Sealon Susk</p>
                <p className="text-gray-500">@sealonsusk</p>
            </div>
            <button className="bg-white rounded-3xl">
                <p className="text-black px-5">Follow</p>
            </button>
        </div>
    )
}

export default Person