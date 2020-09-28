import React from "react"
import QuestboardService from "../../pages/ServicePage"
import axios from "axios"
import {jsonHeaders, domain, handleJsonResponse} from "../../redux/actionCreators/constants/index"
import "./TextInput.css"
import { Button , Input} from 'antd';

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
                this.setState({ text: "" })
                return result
            })

            
        }
        

        render() {
            const { TextArea } = Input;
            console.log(loginData)
            return (
                    <div id="inputTextBorderBox">
                        <div id="testing1">Your Text Here</div>
                    
                        <form>
                            
                            <TextArea 
                                id="feedMessageInput" 
                                name="input1"
                                placeholder="Your Text Here..."
                                onChange={this.textStateChange}
                            />

                        </form>

                        <Button
                        id="TextSubmitButton"
                        onClick={this.textInputClick}
                        >
                        Submit
                        </Button>

                    </div>

            );
        
    }
}



export default TextInput