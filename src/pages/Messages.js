import React from "react";
import DataService from "../dataService";
import { withRouter } from 'react-router-dom'
import Axios from "axios";
// import { withAsyncAction } from "../../redux/HOCs";


class Messages extends React.Component {
    constructor(props) {
        super(props)
        this.client = new DataService()
        this.state = {
            text: "",
        }
    }


    handleMessage = event => {
        event.preventDefault()

        this.client.postMessage(this.state)
            .then(result => {
                // this.props.history.push('/')
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
            <div className='Messages'>
                {console.log(this.state.message)}
                {/* <h4>What do you want to share with the world {this.state.username}?</h4> */}
                <form onSubmit={this.handleMessage}>
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
                    <button type='submit'>Post</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Messages)
