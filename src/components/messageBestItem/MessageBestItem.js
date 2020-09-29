import React from 'react';

import { Button, Icon, Label } from 'semantic-ui-react'

function MessageBestItem(props) {

    return (
        <div className="MessageBestItem">

            User: <strong>{props.username}</strong>
            <br />
             Posted: <strong>{props.createdAt}</strong>
            <br />
            Text: <strong>{props.text}</strong>
            <br />
            Number Of Likes: <strong>{props.likes.length}</strong>
            <br />
            <hr />

        </div>
    )
}
export default MessageBestItem;
