import React from 'react';
import FetchService from '../../FetchService';
import { Button, Form, Input, Segment } from 'semantic-ui-react'
import "./UserMessage.css"

class UserMessage extends React.Component {
    constructor() {
        super();
        this.client = new FetchService();
        this.state = {
            formData: {
                text: "",
                // key: textMessage.key

            }
             
        }
    }
    handleChange = (event) => {
                  const newformData = {...this.state.message};
                  newformData[event.target.name] = event.target.value;
        // this.setState({ message: newMessage });

        this.setState({ formData: newformData });
    };

    handlePosMessage = (event) => {
        event.preventDefault();

        this.client.postMessage(this.state.formData)
        
    }

    render() {
        return (

            <div className="UserMessage">

                <Form.Group id="user_message">
                    <br/>

                    <label htmlFor="textarea">
                        <strong>Create Message Here...</strong>
                        <br/>
                                                
                      <textarea 
                           className= "textarea"
                           name = "text"
                           placeholder='Start Typing Here...'
                   
                        //    value={this.state.message.textMessage}
                           onChange={this.handleChange} >

                      </textarea>
                  </label>
                         <br/>
                        <Button color='orange'  onClick={this.handlePosMessage}>
                        Post Your Message
                       </Button >
                </Form.Group>
            </div>
        )
    }
}
export default UserMessage
