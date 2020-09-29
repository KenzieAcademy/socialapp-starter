import React from 'react';
import DataService from '../../dataService';
import { userIsAuthenticated } from '../../redux/HOCs';


class Message extends React.Component {
    constructor(props) {
        const loginData = JSON.parse(localStorage.getItem("login"));
          super(props)
          this.state = {
            username: loginData.result.username, 
            token: loginData.result.token,
            likeCount: this.props.likes.length,
            data: []
          };
          this.client = new DataService();

        }  
  

    handleLike = () => {
        const username = this.state.username
        if (this.props.likes.some(like => like.username === username)) {
            console.log('already liked!!')
        } else {
            this.client
            .postLike(
                {messageId: this.props.id, 
                    token: this.state.token})
            .then( 
                this.setState(prevState => ({ likeCount: prevState.likeCount + 1 }))
            )
        }
        }
 


    render() {
        return (
            <li className="Message">
                {this.props.username}, {this.props.createdAt} posted:
                <br />
                {this.props.text}
                <br />
                <button onClick={this.handleLike}>
                    <span className="spanlike" role="img" aria-label="samsung">
                    <div className="like-count">👍{this.props.likes.length}</div> </span>
                </button>
            </li>
        );
    }
}


export default userIsAuthenticated(Message);