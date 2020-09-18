import React from "react"
import BackEndServices from "../../BackEndServices"
import { userIsAuthenticated } from "../../redux/HOCs"

class PostMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userPost: ""
        }
    }

    handlePost = e => {
        e.preventDefault()
        BackEndServices.postMessage().then(result => {
            console.log(result)
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() { 
        return (
            <div className="userpost">
                <form id="user-post" onSubmit={this.handlePost}>
                    <label htmlFor="username">User Post</label>
                    <input 
                    type="text"
                    name="user-post"
                    onChange={this.handleChange}
                    />
                    <button type="submit">Post</button>
                </form>
            </div>
        );
    }
}
 
export default userIsAuthenticated(PostMessage)