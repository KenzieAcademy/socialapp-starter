import { Menu } from 'antd'
import React from 'react'

class MessageFeed extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // need to call the message list from the user's profile with a variable here for use in the render
        return(
            <div className="MessageFeed">
                <Menu />
                <h1>Message Feed</h1>
                <h3>Loading...</h3>
            </div>
        )
    }
}

export default MessageFeed