require("dotenv").config({ path: "../../.env" })
import Trend from "./Trend"
import SideComponent from "./SideComponent"
import Link from "next/link"
import { useEffect } from "react"
const Trends = () => {
    
    const trendsArr = [...Array(10)]
    return (
        <SideComponent className="mt-[80px]">
            <h2 className="text-2xl font-bold px-5 pb-2">Trends</h2>
            {trendsArr.map((_) => (
                <Trend />
            ))}
            <Link href='../trends/'>
                <p className="text-blue-500 px-5 py-2 hover:bg-gray-800">
                    Show more
                </p>
            </Link>
            
        </SideComponent>
    )
}

export default Trends
