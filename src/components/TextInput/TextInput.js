import React from "react"
import QuestboardService from "../servicesPage/ServicePage"
import axios from "axios"
import {jsonHeaders, domain, handleJsonResponse} from "../../redux/actionCreators/constants/index"
import "./TextInput.css"

let url = domain + '/messages';
const loginData = JSON.stringify(localStorage.getItem("login"));

class TextInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: ""

        }
        this.client = new QuestboardService();
        let text = this.state.text
    }
    
    
        textStateChange = (event) => {
        this.setState({text: event.target.value});
        console.log(this.state.text)

        }
    

        
        
        
        textInputClick = (event) => {
            // const token = getState().auth.login.result.token;
            let url = "https://socialapp-api.herokuapp.com/messages"
            let text = this.state
            const loginData = JSON.parse(localStorage.getItem("login"));
            console.log(this.state.text)
                fetch(url, {
                    method: "POST",
                    headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
                    body: JSON.stringify(text)
            }).then(handleJsonResponse)
            .then(result => {
                return result
            })


        }

        render() {
            console.log(loginData)
            return (
                    <div id="inputTextBorderBox">
                        <div id="testing1">Your Text Here</div>
                    
                        <form>
                            
                            <input 
                                id="feedMessageInput" 
                                name="input1"
                                onChange={this.textStateChange}
                            />

                        </form>

                        <button
                        id="TextSubmitButton"
                        onClick={this.textInputClick}
                        >
                        Submit
                        </button>

                    </div>

            );
        
    }
}



export default TextInput