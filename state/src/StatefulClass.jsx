import React from "react"
import {useState} from "react"
export const FunctionComponent = () => {
    const [clickedTimes, setClickedTimes] = useState(0)
    const handleClick = () => {
        setClickedTimes(clickedTimes + 1)
    }
    return (
        <>
        <button onClick={handleClick}>Press Me!</button>
        <div>That dang button got clicked {clickedTimes} times</div>
        </>
    )
}