import React from "react";
import DataService from "../../dataService";
import "./GetMessages.css";
import Message from "../message/Message";
import { userIsAuthenticated} from '../../redux/HOCs';

class GetMessages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    };
    this.client = new DataService();
  }
  

  componentDidMount() {
      new DataService()
          .getMessages()
          .then(messages => {
              this.setState({ messages })
          })
  }

  render() {
    const { loading, error } = this.props;
    return (
      <div className="GetMessages">
          <ul id="message-list" list-style-type="none">
          {this.state.messages.map(msg => (
                    <Message key={msg.id} {...msg} />
                    ))}
           </ul>
         
         </div>
    );
  }
}

export default userIsAuthenticated(GetMessages);