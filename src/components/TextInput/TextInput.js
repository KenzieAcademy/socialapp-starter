import React from "react"
import "./TextInput.css"

class TextInput extends React.Component {
constructor(props){
    super(props)
    this.state = {
        text: ""
        }
    }

    render() {

            return (
                <div id="appendToThis">


                        <div id="messagesAndInput">

                            <div id="MessageInput">
                                <div>Your Text Here</div>
                                <input></input>
                            </div>
                        </div>
                    
                </div>
            );
        
    }
}



export default TextInput