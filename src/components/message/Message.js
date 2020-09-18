import React from 'react'
import './messages.css'

class Message extends React.Component {


    render() {
        
        return (
           
<div className="feedbox">
            <li className='messagesfeed'>
                 
               <div className="date"> At {new Date(this.props.createdAt).toDateString()},
                {this.props.username} posted:</div>
                <br />
                <div className="message-text">{this.props.text}</div>
                <div className="likes">Likes: {this.props.likes.length}</div>

            </li>
            </div>
            
        )
    }

}


export default Message 