import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'


function MessageItem(props) {

    return (
        <div className="MessageItem">

            User: <strong>{props.username}</strong>
            <br />
            {/* MessageID: <strong>{props.id}</strong>
            <br /> */}
            Posted at: <strong>{props.createdAt}</strong>
            <br/>
            Text: <strong>{props.text}</strong>
            <br />
            <Button onClick={() => { props.handleLike(props.id) }} as="div" labelPosition="right">
                <Button color="orange">
                    <Icon name="heart" />
                        Love
                </Button>
                <Label as="a" basic color="orange" pointing="left">
                {props.likes.length}
                </Label>
                </Button>

            <Button color="blue" onClick={() => { props.handleRemoveLike(props.id) }}>No Love</Button>
            <br/>

        </div>
    )
}
export default MessageItem;

