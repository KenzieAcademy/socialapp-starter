import React from "react"
import "./message.css"
import { getUsername} from "../../services/dataService"

class Message extends React.Component {

    state = { likeCount: this.props.likes.lenght}

    handleLike = () => {
        const loggedInUsername = new DataService().getUsername()
        if (this.props.likes.some(likeObject => likeObject.username === loggedInUsername)) return
    
    dataService
        .postLike(this.props.id)
        then(like => {
            this.setState(latesState => ({ likeCount: latesState.likeCount + 1}))
        })
     

//     render () {
//         return (
//             <li className="Message">
//                 At {this.props.createdAt}, {this.props.username} posted:
//                 <br />
//                 {this.props.text}
//             <div className="like-count">
//                 Likes: {this.props.likes.length}</div>
//             </div>
//             <button onClick ={this.handleLike}><span role="img" aria-label="Like>thumbs up</span></button>
//             </li>
//         )
//     }
// }

export default Message