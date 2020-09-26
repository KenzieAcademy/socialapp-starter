import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import DataService from "../../dataService";
import "./PostMessage.css"



class PostMessage extends React.Component {
    constructor(props) {
        const loginData = JSON.parse(localStorage.getItem('login'))
        super(props)
        this.client = new DataService()
        this.state = {
            text: "",
            token: loginData.result.token,
            username: loginData.result.username
        }
    }


    handlePostMessage = event => {
        event.preventDefault()

        this.client.postMessage({
            text: this.state.text,
            token: this.state.token
        })
            .then(result => {
                console.log(result.data.messages)
                this.setState({
                    text: result.data.messages

                })
            });
           
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        return (
            <div className='PostMessage'>
                {console.log(this.state.message)}
                <h4>What do you want to share with the world {this.state.username}?</h4>
                <form onSubmit={this.handlePostMessage}>
                    <div>
                        <label htmlFor="text">Post a message </label>
                        <input
                            type="text"
                            name="text"
                            placeholder="Write your post here"
                            // value={this.state.text}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type='submit'>Post message</button>
                    <div className="postBox">
                        <p>
                            {this.state.text}
                        </p>

                    </div>
                </form>
            </div>
        )
    }
}

export default userIsAuthenticated(PostMessage)

