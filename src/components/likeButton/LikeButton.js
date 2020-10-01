import React from "react";
import DataService from "../../DataService";
import {LikeOutlined} from '@ant-design/icons';

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
<<<<<<< HEAD
   
   this.setState({
     
     isSubmitted: true,
    likes: this.state.like +1
   });
   
    // this.client.handleLike(this.state).then((result) => {
    //   console.log(result);
    //   return result;
    // });
=======
    console.log(this.state.messageId);
    this.client.handleLike(this.state).then((result) => {
      console.log(result);
      return result;
    });
>>>>>>> 1f5b516cd1d050ca61f5f9d9488d56a975fd3b70
  };

  render() {
    return (
      <div className="Like Button">
        <button onClick={this.handleLike}>Like:<LikeOutlined /></button>
      </div>
    );
  }
}

export default LikeButton;
