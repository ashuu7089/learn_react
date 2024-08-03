import React, { Component } from "react";

export default class PropComponent extends Component{

    render(){
        return (
            <div>
                <h1>Props with class component</h1>
                <name> Props Name {this.props.name}</name>
            </div>
        )
    }
}