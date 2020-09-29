import React from "react";
import Messages from "../components/messages/Messages";
import Menu from "../components/menu/Menu";
import DataService from "../services/dataService";



class MessageFeed extends React.Component {
    state = { messages: [] }
    componentDidMount (){
        new DataService().getRecentMessages().then(messages => {
            this.setState({ messages})
        })

    }

render (){
if (this.state.messages.length === 0){
return(
        <div className="MessageFeed">
            <Menu /> 
         <h1>Message Feed</h1>
         <h3>loading...</h3>
        </div>
)
}
return (
      <div className="MessageFeed">
            <Menu />
            <h1>Message Feed</h1>
            <ul>
                {this.state.messages.map(msg => (
                <Messages key={msg.id}{...msg}/>
                ))}
        </ul>
          
        </div>
    )
}
}

export default MessageFeed;