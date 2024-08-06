import React, { Component } from "react";

class Unmount extends Component {
    constructor(){
        super()
       
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        return (
            <div>
                <h1>Unmount life cycle method </h1>
            </div>
        )
    }
}

export default Unmount;