import { useRef } from "react";

function AddTask({onClick}) {
    const inputRef = useRef();
    return (
        <>
            <input ref={inputRef} type="text"></input>
            <button onClick={() => {onClick(inputRef.current.value)}}>Add Task</button>
        </>
    )
}

export default AddTask;