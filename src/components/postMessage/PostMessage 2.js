// import React from "react";
// import { userIsAuthenticated } from "../../redux/HOCs";
// import DataService from "../../dataService";
// import "./PostMessage.css"



// class PostMessage extends React.Component {
//     constructor(props) {
//         const loginData = JSON.parse(localStorage.getItem('login'))
//         super(props)
//         this.client = new DataService()
//         this.state = {
//             text: "",
//             token: loginData.result.token,
//             username: loginData.result.username
//         }
//     }


//     handlePostMessage = event => {
//         event.preventDefault()

//         this.client.postMessage({
//             text: this.state.text,
//             token: this.state.token
//         })
//             .then(result => {
//                 console.log(result.data.messages)
//                 this.setState({
//                     text: result.data.messages
//                 })
//             });
//         this.setState({ text: "" })
//     }


//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value })
//     }

//     render() {

//         return (
//             <div className='PostMessage'>
//                 {console.log(this.state.message)}
//                 <h4>What do you want to share with the world {this.state.username}?</h4>
//                 <form onSubmit={this.handlePostMessage}>
//                     <div>
//                         <label htmlFor="text">Create message </label>
//                         <br />
//                         <textarea
//                             type="text"
//                             name="text"
//                             value={this.state.text}
//                             placeholder="What's on your mind?"
//                             maxLength="255"
//                             rows="5"
//                             cols="50"
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                     <button type='submit'>Post</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default userIsAuthenticated(PostMessage)

