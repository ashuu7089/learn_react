import React, { Component } from "react";

class RenderLifeCycle extends Component {
    // For using state
    constructor(){
        super();
        this.state = {
            email : "dfdfk"
        }
        // FOR check props come
        console.log(this.props);
    }
    
    
    render(){

        console.log("Render  method", this.state.email);
        return (
            <div>
                <h1>RENDER LIFE CYCLE METHOD { this.props.name }</h1>
                <button onClick={()=> this.setState({email : "xyz@"})}>Change Email</button>
            </div>
        )
    }
}
export default RenderLifeCycle;
