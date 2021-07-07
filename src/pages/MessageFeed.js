// import React from "react"
// import { userIsAuthenticated } from "../redux/HOCs";
// import { Link } from "react-router-dom";
// import Menu from "../components/menu/Menu"
// import PostMessage from "../components/postMessage/PostMessage"
// // import DeleteMessage from "../components/deleteMessage/DeleteMessage";
// import GetMessages from "../components/getMessages/GetMessages";


// class MyMessages extends React.Component {

//     render() {
//         return (
//             <div className='MyMessages'>
//                 <Menu isAuthenticated={this.props.isAuthenticated} />
//                <PostMessage />
//                 <br/>
//                 {/* <DeleteMessage /> */}
//                 <br/>
//                 <GetMessages />
//                 <br/>
//                 <Link to="/profile/:username">Back to Profile</Link>
import React from 'react'
import Menu from '../components/menu/Menu';
import GetMessages from '../components/getMessages/GetMessages';
import PostMessage from '../components/postMessage/PostMessage'
import DataService from '../dataService';
import { userIsAuthenticated } from '../redux/HOCs';

class MessageFeed extends React.Component {
    state = { messages: [] }

    componentDidMount() {
        new DataService()
            .getMessages()
            .then(messages => {
                this.setState({ messages })
            })
    }

    render() {
        if (this.state.messages.length === 0) {
            return (
                <div className="MessageFeed">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                    <h1>Message Feed</h1>
                    <h3>Loading...</h3>
                </div>
            )
        }

        return (
            <div className="MessageFeed">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <br/>
                <PostMessage />
                <br />
                <GetMessages />
            </div>
        )
    }
}

// export default userIsAuthenticated(MyMessages)
export default userIsAuthenticated(MessageFeed);
