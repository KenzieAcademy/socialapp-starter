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
        this.setState({ text: "" })
       
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    // refreshPage() {
    //     return window.location.reload()
    // }
    // }

    // componentDidMount() {
    //     this.refreshPage()
    // }

    // reloadPage() {
    //     // The last "domLoading" Time //
    //     const currentDocumentTimestamp =
    //         new Date(performance.timing.domLoading).getTime();
    //     // Current Time //
    //     const now = Date.now();
    //     // Ten Seconds //
    //     const tenSec = 10 * 1000;
    //     // Plus Ten Seconds //
    //     const plusTenSec = currentDocumentTimestamp + tenSec;
    //     if (now > plusTenSec) {
    //         window.location.reload();
    //     } else { }
    // }







    render() {

        return (
            <div className='PostMessage'>
                {console.log(this.state.message)}
                {/* <h3>What do you want to share with the world {this.state.username}?</h3> */}
                <form onSubmit={this.handlePostMessage} >
                    <div className="textBox">
                        <label htmlFor="text">Create post</label>
                        <br />
                        <textarea
                            className="textAreaStyle"
                            type="text"
                            name="text"
                            value={this.state.text}
                            placeholder="What's on your mind?"
                            maxLength="255"
                            rows="4"
                            cols="70"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type='submit' className="postButton" >Post</button>
                </form>
            </div>
        )
    }
}

export default userIsAuthenticated(PostMessage)

