import React from 'react';
import FetchService from '../../FetchService';

class UserMessage extends React.Component {
    constructor() {
        super();
        this.client = new FetchService();
        this.state = {
            // messages: [],

            formData: {
                text: "",

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
        .then(() => {this.client.getMessages()
        // .then((messageData) => {
        //     this.setState({

        //         messages:  messageData.messages
        //     })
        // })
        
        })
 
        
        
    }

    render() {
        return (

            <div className="UserMessage">

                <form id="user_message">

                    <label htmlFor="textarea">
                        Message
                                                
                      <textarea 
                           className= "textarea"
                           name = "text"
                   
                        //    value={this.state.message.textMessage}
                           onChange={this.handleChange} >

                      </textarea>
                  </label>
                         <br/> <br/>


                        <button  onClick={this.handlePosMessage}>
                        Post message
                       </button >

                       
                </form>
            </div>
        )
    }
}
export default UserMessage
