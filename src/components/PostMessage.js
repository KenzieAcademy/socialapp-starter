import React from "react"

import { userIsAuthenticated } from "../redux/HOCs"
// import PostMessageService from "../services/PostMessageService"


class PostMessage extends React.Component {
    // // constructor(props) {
    // //     super(props);
    //     // this.state = {
    //         // text: "",
    //     // };

    //     this.PostMessageService = new PostMessageService()
    // }



    // handleMessagePost = (event) => {
    //     event.preventDefault();
    //     this.PostMessageService.postMessage(this.state).then((result) => {
    //         console.log(result.data);
    //     });
    //     console.log("Post Button Pressed")
    // };

    render() {
        return (
            <div className="Message">


                <div className="postMessageForm">
                    <form className="postMessageFormForm" onSubmit={this.props.handleMessagePost}>
                        <input
                            type="text"
                            name="text"
                            required
                            onChange={this.props.handleChange}
                            value={this.props.text}
                        />

                        <button type="submit">Post Message</button>
                    </form>
                </div>
            </div>
        );
    }
}





export default userIsAuthenticated(PostMessage);