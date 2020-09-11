import React from "react";
import DataService from "../../DataService"
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import { Input } from 'antd';


class PostMessage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
       text:''
         }
         this.client = new DataService;
    }

    
  handleMessage = e => {
    e.preventDefault();
    let message = this.state.text
    console.log(message)
    this.client.postMessage(this.state.text)
    
    
  };

  handleChange = e => {
   
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
   const { TextArea } = Input;
    
    return (
      <div className="MessageForm">
        <form id="message-form" onSubmit={this.handleMessage}>
        
        
        <TextArea rows={4} 
         type="text"
         name="text"
         autoFocus
         required
         onChange={this.handleChange}/>

          
          <button type="submit" disabled={loading}>
            Post Message
          </button>
        </form>
        
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );}
  
}

export default withAsyncAction("auth", "login")(PostMessage);

