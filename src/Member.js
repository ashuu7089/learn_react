import React from "react";

function Member(props){
    return(
        <div>
            <h1> Member Props Pass as a Function</h1>
            <button onClick={props.data}>Call data function</button>
        </div>
    )
}

export default Member;