import React from 'react'
import './MessageList.css'
import Message from "../message/Message"
import InfiniteScroll from 'react-infinite-scroller'
// import { message } from 'antd'


function MessageList(props) {

    const listItems = props.messages.map((message, i) => <Message {...message} key={i} message={message} />)

//     const listItems = props.messages.map((message, i) => <Message key={i} message={message} />)

    return (
        <div>
            <InfiniteScroll loadMore={props.loadMoreMessages} hasMore={true} >{listItems}</InfiniteScroll>
            <ul>
                {listItems}
            </ul>
        </div>
    )

}

export default MessageList
