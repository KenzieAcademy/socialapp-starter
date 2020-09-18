import React from 'react'
import DataService from '../../DataService'
import './messages.css'

class Message extends React.Component {
    constructor(props){
        super(props)
        this.client = new DataService()
    }
    
  
        
        handleChange =(event)=> {
             console.log(this.props.id)
            // this.client.deletmessages()
            return this.client.deleteMessages(this.props.id)

           

            
        }

    render() {
        
        return (
            
           
<div className="feedbox">


            <li className='messagesfeed'>
            <button type="text"  onClick={this.handleChange}>delete</button>
                 
               <div className="date"> At {new Date(this.props.createdAt).toDateString()},
                {this.props.username} posted:</div>
                <br />
                <div className="message-text">{this.props.text}</div>
                <div className="likes">&#128077;  : {this.props.likes.length}</div>

            </li>
            </div>
            
        )
    }

}


export default Message 