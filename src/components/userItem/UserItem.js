import React from "react"
import { Image, Feed } from 'semantic-ui-react'
import moment from 'moment'




function UserItem(props) {

    return (
        <Feed.Event className="UserItem">
           
            <Feed.Label>

                <Image src={'https://socialapp-api.herokuapp.com/users/' + props.username + "/picture"} />

            </Feed.Label>
            <Feed.Content>
                <Feed.User>
           


     {props.displayName}
                    
                </Feed.User>
                <Feed.Date>

                {moment(props.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </Feed.Date>

            </Feed.Content>
            <br />
            <br />
            <br />

        </Feed.Event>
    )
}
export default UserItem