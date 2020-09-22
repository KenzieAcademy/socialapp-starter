import React from 'react';
import FetchService from '../../FetchService';
import { Button, Form, Input, Segment } from 'semantic-ui-react'
import "./UserMessage.css"
import "../../pages/MessageFeed";

class UserMessage extends React.Component {
    constructor() {
        super();
        this.client = new FetchService();
        this.state = {
           
            formData: {
                text: "",
            },
            error: "",
            submitted: false
                       
        }
    }
    handleChange = (event) => {
                  const newformData = {...this.state.formData};
                  newformData[event.target.name] = event.target.value;
        
        this.setState({ formData: newformData });

    };

    handlePosMessage = (event) => {
        event.preventDefault();

        this.client.postMessage(this.state.formData)
        .then((resData) =>{
            console.log(resData);
            if (resData.statusCode === 200) {
                this.setState({
                    submitted: true,
                    error: ""
                })
            } else {

                this.setState({
                    error: resData.message
                })
            }


         } )
    };


        componentDidUpdate() {
            this.client.getMessages()
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
