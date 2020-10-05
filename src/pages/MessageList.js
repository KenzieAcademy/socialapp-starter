import React from "react";
import Menu from "../components/menu/Menu";
import DataService from "../services/DataService";
import Message from "../components/message/Message";
import PostMessage from "../components/postMessage/PostMessageForm"
import GetUsersService from "../services/GetUsersService"
import "./MessageList.css";
import { userIsAuthenticated } from "../redux/HOCs"

// import InfinteScroll from "react-infinite-scroll- component";

class MessageList extends React.Component {
    client = new DataService();

    state = {
        message: [], users: [],
        text: "",
        hasMore: true
    };

    componentDidMount() {
        this.client.getAllMessages().then((response) => {
            this.setState({ message: response.data.messages });
        });
        new GetUsersService().getUsers().then((response) => {
            this.setState({ users: response.data.users });
            console.log(response.data);
        });
    }

    handleMessagePost = (event) => {
        event.preventDefault();
        this.client.postMessage({ text: this.state.text })
            .then((result) => {
                this.setState((currentState) => {
                    return {
                        message: [result.data.message, ...currentState.message],
                        text: ""
                    }
                })
            });
        console.log("Post Button Pressed");
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        if (this.state.message.length === 0 || this.state.users.length === 0) {
            return (
                <div className="MessageList">
                    <Menu />

                    <h1>MessageList</h1>
                    <h3>LOADING...</h3>
                </div>
            );
        }

        return (
            <div className="MessageList">
                <Menu isAuthenticated={this.props.isAuthenticated} />
                {/* <InfiniteScroll */}
                {/* datalength={this.state.message.length}
                loader={<h3>Loading...</h3>} */}
                {/* hasMore={this.state.hasMore} */}
                {/* next={() => {this.client.getAllMessages()
                .then(response => {
                    this.setState(state => ({
                        message: state.message.concat(response),
                    }))
                    console.log(this.state.message)
                    if (response.length === 0) {
                        this.setState({ hasMore: false })
                    }
                })
            }}
            endMessage={
                <p style={{ textAlign: "center"}}>
                <b>My Old Friend, This is the End</b>
            </p>
        }
         */}


                <h1>Message Feed</h1>
                <PostMessage handleChange={this.handleChange} handleMessagePost={this.handleMessagePost} text={this.state.text} />
                <div className="messageContainer">
                    <ul className="messageList">
                        {this.state.message.map((messageObject) => (
                            <Message key={messageObject.id} {...messageObject} />
                        ))}
                    </ul>


                    <ul className="usersList">

                        <h1>Follow These Users</h1>

                        {this.state.users.map((userObject) => (
                            <li key={userObject.id}>{userObject.username}</li>
                        ))}

                    </ul>

                </div>
                {/* </InfiniteScroll> */}
            </div>

        );
    }


}


export default userIsAuthenticated(MessageList)