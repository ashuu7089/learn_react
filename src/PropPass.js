import React from "react";

function PropPass(props){
    return(
        <div>
            <h1>Props Pass as a Function</h1>
            <button onClick={props.data}>Call data function</button>
        </div>
    )
}

export default PropPass;