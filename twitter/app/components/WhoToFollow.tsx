import SideComponent from "./SideComponent"
import Person from "./PersonToFollow"

const WhoToFollow = () => {
    const wtfArray = [...Array(3)]
    return (
        <SideComponent>
            <h2 className="text-2xl font-bold px-5 pb-2">Who to Follow</h2>
            {wtfArray.map((_) => (
                <Person />
            ))}
            <p className="text-blue-500 px-5 py-2 hover:bg-gray-800">
                Show more
            </p>
        </SideComponent>
    )
}

export default WhoToFollow
