import React from "react"
import { List, Image } from 'semantic-ui-react'
const UserItem = () => (
    <List>
      <List.Item>
        <Image avatar src='/images/avatar/small/rachel.png' />
        <List.Content>
          <List.Header as='a'>Rachel</List.Header>
          <List.Description>
            Last seen watching{' '}
            <a>
              <b>Arrested Development</b>
            </a>{' '}
            just now.
          </List.Description>
        </List.Content>
      </List.Item>
      </List>
)
      
//function UserItem(props) {

   // return (
    //<div className="UserItem">
       // <br/>
       // UserName: {props.username}
      //  <br/>
      //  DisplayName: {props.displayName}
   // </div>
   // )
//}
export default UserItem