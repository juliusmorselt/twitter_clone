import React from "react"
import {WhatsHappening} from "../components/WhatsHappening"
import Trend from "../components/Trend"

import Router from "next/router"
import { randomInt } from "crypto"

const Trendspage = () => {
    const amount = 20
    const trendsArr = [...Array(amount)]
    return (<>
        <div className="w-[600px] min-h-screen border-x border-x-gray-600">
            
            <div className="w-[600px] px-5 py-2 fixed bg-black z-50">
                <h1 className="text-2xl font-semibold">Here are {amount} trends</h1>
            </div>
            
            <div className='pt-12'>
                {trendsArr.map((_) => (
                    <Trend />
                ))}
            </div>
            
        </div>
    </>)
}

export default Trendspage