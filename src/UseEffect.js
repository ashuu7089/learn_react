import React, { useState, useEffect } from "react";

function UseEffect(props){
    useEffect(()=>{
        console.log("useEffect", props.count);
        alert(`count is ${props.count}`)
    },[props.count])
    return(
        <div>
            <h1>UseEffect data : {props.data}</h1>
            <h1>UseEffect count : {props.count}</h1>
        </div>
    )
}

export default UseEffect;
