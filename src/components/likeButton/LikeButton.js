import React from "react";
import DataService from "../../DataService";
<<<<<<< HEAD
import {LikeOutlined} from '@ant-design/icons';
=======
import { LikeOutlined } from "@ant-design/icons";
>>>>>>> 1febe8c4029cb35d688e3074e69142dc49fe5e31

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
        
        likeData: {
          messageId:props.id
          
        },
        likes: 0,
        isSubmitted: false

      
      
    };

    this.client = new DataService();
  }

  handleLike = (e) => {
    
    let loginData = JSON.parse(localStorage.getItem("login"));
     this.client.handleLike(this.state.likeData).then(res => 
          console.log(res));
    console.log(this.state.likeData)
    e.preventDefault();
    console.log(this.state.messageId);
    this.client.handleLike(this.state).then((result) => {
      console.log(result);
      this.props.handleLikeStatus(result.data.like.id);
    });
  };

  render() {
    return (
      <div className="Like Button">
<<<<<<< HEAD
        <button onClick={this.handleLike}>Like:<LikeOutlined /></button>
=======
        <button onClick={this.handleLike}>
          Like <LikeOutlined />
        </button>
>>>>>>> 1febe8c4029cb35d688e3074e69142dc49fe5e31
      </div>
    );
  }
}

export default LikeButton;
