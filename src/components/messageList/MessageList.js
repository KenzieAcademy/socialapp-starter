import React from 'react'
import './MessageList.css'
import Message from "../message/Message"
import InfiniteScroll from 'react-infinite-scroller'


function MessageList(props) {

    const listItems = props.messages.map((message, i) => <Message {...message} key={i} message={message} handleDelete={props.handleDelete} />)

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