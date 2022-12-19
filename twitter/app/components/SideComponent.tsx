const SideComponent = ({children, className}:any) => {
    return(
        <div className={`${className} w-full bg-componentbg mt-5 pt-5 mb-5 rounded-3xl text-white overflow-hidden`}>
            {children}
        </div>
    )
}

export default SideComponent