import React from "react";
import './Editor.css'

export default class Editor extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }

    handleChange =(event) => {
        this.setState((prevState) => ({ value: event.target.value }));
    }

    render(){
        return(
            <div className="all">
        <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Kalvium Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
            </div>
        )
    }
}