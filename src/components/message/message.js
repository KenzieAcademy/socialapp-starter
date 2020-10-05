import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import SocialAppService from "../../socialAppService";

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = { likeCount: this.props.likes.length };
    this.client = new SocialAppService();

  }

  handleLike = () => {
    const loggedInUsername = this.client.getUserName();
    const userHasLiked = this.props.likes.some(
      (likeObject) => likeObject.username === loggedInUsername
    );
    if (userHasLiked) return;
    this.client.postLike(this.props.id).then((like) => {
      this.setState((latestState) => ({
        likeCount: latestState.likeCount + 1,
      }));
    })

  };

  handleDeleteLike = () => {
    const loggedInUsername = this.client.getUserName();
    const userHasLiked = this.props.likes.find(
      (likeObject) => likeObject.like === loggedInUsername)

    if (userHasLiked) {

      this.client.deleteLike(userHasLiked.id).then((like) => {
        this.setState((latestState) => ({
          likeCount: latestState.likeCount - 1,
        }))
      })
    }
  }
  render() {
    return (
      <li className="message">
        At {this.props.createdAt},{this.props.username}
        posted
        <div>
          {this.props.text}
          <div className="like-count">Likes: {this.state.likeCount}</div>
          <button onClick={this.handleLike}>
            <span role="img" aria-label="like">
              👍
            </span>
          </button>
          <br />
          <button onClick={this.handleDeleteLike}>
            <span role="img" aria-label="like">
              👎
            </span>
          </button>
        </div>
      </li>
    );
  }
}

export default withAsyncAction("auth", "login")(Message);

//   .then(response => response.data.like)
//   }
// deleteLike(likeId) {
//   const endpoint = `${this.url}/likes/`
//   const config = {
//     headers: {
//       Authorization: "Bearer " + this.getToken(),
//     },
//   }
//   return this.client.delete(endpoint, { likeId }, config)

// }






// import React from "react";
// import { Button, Comment, Form, Header } from "semantic-ui-react";
// import { withAsyncAction } from "../../redux/HOCs";
// import socialAppService from "../../socialAppService";

// class Message extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             displayName: "",
//             message: "",

//         }
//         this.client = new socialAppService()
//     }
//     handlePostMessage = e => {
//         e.preventDefault();
//         this.props.message(this.state);
//     }

//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     render() {
//         return <Comment.Group>
//             <Header as="h3" dividing>
//                 Comments
//     </Header>

//             <Form reply>
//                 <Form.TextArea />
//                 <Button content="Add Reply" labelPosition="left" icon="edit" primary />
//             </Form>
//         </Comment.Group>
//     }
// }

// export default withAsyncAction("auth", "login")(Message);
