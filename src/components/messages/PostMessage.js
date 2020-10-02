import React from "react"
import { withAsyncAction } from "../../redux/HOCs"
import MessageService from "./MessageService"

class PostMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
    }

        this.client = new MessageService()

    }

    handlePost = e => {
        e.preventDefault();
        this.client.postMessage(this.state).then(result => {
            console.log(result.data)
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="postMessage">
                <form id="text" onSubmit={this.handlePost}>
                    <label htmlFor="text">Post Message:</label>
                    <input type="text" name="text" onChange={this.handleChange}/>
                    <button type="submit">Post!</button>
                </form>
            </div>
        )
    }
   
}
 
export default withAsyncAction("auth", "login")(PostMessage)