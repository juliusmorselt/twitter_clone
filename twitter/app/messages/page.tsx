import React from "react"
import Searchmessage from "./components/searchmessage"

const Todo = () => {
    return(
        <>
            <div className=" p-5">
            
                <h1 className="text-2xl font-semibold mb-5">Messages</h1>    
                <Searchmessage></Searchmessage>

            </div>
        </>
    )
}

export default Todo