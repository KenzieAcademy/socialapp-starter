
import React from 'react'
import DataService from '../../DataService'
import './messages.css'
import Postlike from '../like/Like'
import{ DeleteFilled }from '@ant-design/icons'

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.client = new DataService();

    }

    handleChange = () => {
        console.log(this.props.id)
        
        return this.client.deleteMessages(this.props.id)


    }


    render() {


        return (


            <div className="feedbox">


                <li className='messagesfeed' >
                <DeleteFilled className="delete-btn" onClick={this.handleChange} />
                   

                    <div className="date"> At {new Date(this.props.createdAt).toDateString()},
                {this.props.username} posted:</div>
                    <br />
                    
                    <div className="message-text">{this.props.text}</div>
                    <Postlike />
                    <div className="likes">  : {this.props.likes.length}</div>
                    
                </li>
            </div>

        )
    }

}


export default Message 