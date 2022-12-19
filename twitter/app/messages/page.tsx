import React from "react"
import Searchmessage from "./components/searchmessage"

const Todo = () => {
    return(
        <div>
            <div className="border-x border-x-gray-600 p-5">
            
                <h1 className="text-2xl font-semibold mb-5">Messages</h1>    
                <Searchmessage></Searchmessage>

            </div>
        </div>
    )
}

export default Todo