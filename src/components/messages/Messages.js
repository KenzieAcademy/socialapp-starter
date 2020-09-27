import React from "react";
import DataService from "../../dataService";
// import { withRouter } from 'react-router-dom'
import Menu from "../menu/Menu"
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../../redux/HOCs";




class Messages extends React.Component {
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


    handleMessage = event => {
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
            <div className='Messages'>
                {/* <Menu /> */}
               
                {console.log(this.state.message)}
                <h4>What do you want to share with the world {this.state.username}?</h4>
                <form onSubmit={this.handleMessage}>
                    <div>
                        <label htmlFor="text">Post message </label>
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

export default userIsAuthenticated(Messages)

