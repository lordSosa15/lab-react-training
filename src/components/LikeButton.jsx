import { useState } from "react";
export default function LikeButton() {
    // const colors = ['purple','blue','green','yellow','orange','red'];

    const [counter, setCounter ] = useState(0);

    const increment = () => {
        setCounter((prevCounter) => prevCounter + 1)
        };
        

    return (
        <div style={{}}>
        <button onClick={increment}> { counter } Likes</button>

        <button onClick={increment}> { counter } Likes </button>
        </div>
    )
}

