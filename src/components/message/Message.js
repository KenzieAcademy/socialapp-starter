import React, { Component } from "react"
import "./Message.css"

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            //sample text
        }
    }

    render() {
        return (
            <div className="Message">
                <p>sample text</p>
            </div>
        )
    }
}