import React from "react"
import MessageItem from "../messageitem/MessageItem"
<<<<<<< HEAD

function MessageList(props) {

    return (
        <div className="MessageList">
            {props.messages.map((messageObj, index) => {
                return <MessageItem
                    index={index}
                    key={messageObj.id}
                    text={messageObj.text}
                    username={messageObj.username}
                    likes={messageObj.likes}
                    id={messageObj.id}
                    handleLike={props.handleLike}
                    handleRemoveLike={props.handleRemoveLike}
                />
            })}


        </div>
    )

=======
class MessageList extends React.Component {
    render() {
        return (
            <div className="MessageList">
                {this.props.messages.map((messageObj, i) => {
                    return <MessageItem
                        key={i}
                        text={messageObj.text}
                        username={messageObj.username}
                        likes={messageObj.likes}
                    />
                })}
            </div>
        )
    }
>>>>>>> master
}
export default MessageList