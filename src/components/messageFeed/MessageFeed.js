import React from "react";
import DataService from '../DataService'
import { Feed } from 'semantic-ui-react'

class MessageFeed extends React.Component {
   
      
    constructor(props){
      super(props)
      
        
      
      this.state = {
        
        messages:[],
        
          
        
         
        
      }
      this.client = new DataService()
    }
    componentDidMount(){
        this.client.getMessages().then(messages => {
         
          this.setState({messages})
         
          console.log(this.state.messages)
        })
        
        
      }
    render(){
      if (this.state.messages.length === 0){
        return(
          <h3>Loading...</h3>
        )
      }
      return(
        <div> {(this.state.messages).map(
          messageObject =>{
            return (
                  <Feed>
                     <li> At: {messageObject.createdAt}</li>
                      <li>Id: {messageObject.id}</li>
                      <li> {messageObject.username}</li>
                      <li> {messageObject.text}</li>
                      <li> Likes: {messageObject.likes.length}</li>
                      <br/>
                      
                      
                    </Feed>

                    )
          }
        )}</div>
        
           
          
            
           
      




          
         
               
          
          
        
      
    )
          

        
    }
}

export default MessageFeed