import { useState } from "react"

export default function StateExample() {
    const [count,setCount]=useState(0);
    return(
        <div className="stateExample">
            <h2>counter:{count} </h2>
            <button onClick={() =>setCount(count+1)}>increase</button>
            <button onClick={() =>setCount(count-1)}>decrease</button>
            <button onClick={() =>setCount(0)}>reset</button>
        </div>
    )
}