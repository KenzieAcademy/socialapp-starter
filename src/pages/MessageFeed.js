import { Menu } from 'antd'
import React from 'react'

class MessageFeed extends React.Component {
    render() {
        return (
            <div className="MessageFeed">
                <Menu />
                <h1>Message Feed</h1>
                <h3>Loading...</h3>
            </div>
        )
    }
}

export default MessageFeed