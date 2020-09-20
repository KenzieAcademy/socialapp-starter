import React from "react";
import DataService from "../dataService";
import { withRouter } from 'react-router-dom'


class Messages extends React.Component {
        constructor(props) {
        super(props)
        this.client = new DataService()
        this.state = {
            message: {
                text: ""
            }
        }
    }


    handleMessage = event => {
        event.preventDefault()

        this.client.postMessage(this.state)
            .then(result => {
                // this.props.history.push('/')
                console.log(result.data.messages)
                this.setState({
                    message: result.data.messages
                })
            });
    }


    handleChange = (event) => {
        // const message = { ...this.state.message }
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        return (
            <div className='Messages'>
                {console.log(this.state.message)}
                {/* <h4>What do you want to share with the world {this.state.message.username}?</h4> */}
                <form onSubmit={this.handleMessage}>
                    <div>
                        <label htmlFor="text">Post a message </label>
                        <input
                            type="text"
                            name="text"
                            // value={this.state.message.text}
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
