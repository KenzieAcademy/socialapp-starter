import { OmitProps } from "antd/lib/transfer/ListBody";
import React from "react";
import GetDisplayName from "../getDisplayName/GetDisplayName";
import LikeButton from "../likeButton/LikeButton"

class Message extends React.Component{
constructor (props) {super (props)
this.state={
  isSubmitted:false
}
}

handleSubmit = (event)=>{
  event.preventDefault();
  this.setState({
    isSubmitted: !this.state.isSubmitted
  })
}
render(){


  if (this.props.key) {
    return <div>LOADING</div>;
  } if (this.state.isSubmitted) {
    return (
      <li key={this.props.keyId} className = "Message">
        At {new Date(this.props.createdAt).toDateString()}{" "}
        <GetDisplayName username={this.props.username} /> posted:
        <div className="message-text">{this.props.text} </div>
        <div className="likes">Likes: {this.props.likes.length}
        <LikeButton id= {this.props.id}/>

        </div>
      </li>
    );
  } else{
    return (
    <li key={this.props.keyId} className = "Message">
      At {new Date(this.props.createdAt).toDateString()}{" "}
      <GetDisplayName username={this.props.username} /> posted:
      <div className="message-text">{this.props.text} </div>
      <div className="likes">Likes: {this.props.likes.length}
      <LikeButton id= {this.props.id}/>

      </div>
    </li>
  );
}
} 
}


export default Message;
