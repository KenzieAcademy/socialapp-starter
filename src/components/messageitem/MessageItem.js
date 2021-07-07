import React from "react"

import { Feed, Icon, Button } from 'semantic-ui-react'

function MessageItem(props) {
    return (
        <Feed.Event >
            <Feed.Content>
                <Feed.Summary>
                    {props.username}

                </Feed.Summary>
                <Feed.Extra text>
                    {props.text}
                </Feed.Extra>

                <Feed.Meta>
                    <Feed.Like>

                        <Icon name='heart' onClick={() => { props.handleLike(props.id) }} />
        Like
           {props.likes.length}

                    </Feed.Like>
                    <Feed.Like>
                        <Icon name= "frown" onClick={() => { props.handleRemoveLike(props.index) }} />
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        

        </Feed.Event>
    )
}

export default MessageItem