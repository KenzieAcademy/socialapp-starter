import React from "react"
import { Avatar, Textarea, Button } from "evergreen-ui"
import DataService from "../../dataService"


class SendPost extends React.Component {
  constructor(props) {
  super(props)
  this.state = {value:""}
  this.client = new DataService();
    
  
  }

  handleMessage = e => {
    e.preventDefault();
    const message = {
      text: this.state.value
    }
    this.client.handleMessage(message)
    }


render() {
    return (
        <div className='flex'>
          <Avatar isSolid name="Tyler Ammons" size={40} />

          <form id="PostMessage" onSubmit={this.handleMessage}>

          <Textarea
            name="textarea-1"
            placeholder="Textarea placeholder..."
            label="Feed Post"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />
          <Button marginRight={16}>Post</Button>
          </form>
        </div>
    )
}}






export default SendPost;