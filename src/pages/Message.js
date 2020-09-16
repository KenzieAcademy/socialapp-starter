 import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import { Feed, FeedEvent } from 'semantic-ui-react'

class Messages extends React.Component {
constructor(props){
  super(props)

}
  
 

  render() {
    return (
    <div className="Messages">
      <Menu isAuthenticated={this.props.isAuthenticated} />
      <h2>Messages</h2>
      <Feed>
        <FeedEvent>
        
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User> added you as a friend
            <Feed.Date>1 Hour Ago</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            
          </Feed.Meta>
        </Feed.Content>
        </FeedEvent>
      </Feed>
    <div>Something</div>
      </div>
    );
  }
}

export default userIsAuthenticated(Messages)