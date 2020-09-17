import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import RegistrationForm from "../components/registration form/RegistrationForm"
import { userIsNotAuthenticated } from "../redux/HOCs";





class Home extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         isSignedIn: false,
//     }
// }

// onSuccess() {
//   this.setState({
//     isSignedIn: true
//   })
// }


// componentDidMount() {
//   window.gapi.load('auth2', () => {
//     this.auth2 = gapi.auth2.init({
//       client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
//     })
//     this.auth2.then(() => {
//       this.setState({
//         isSignedIn: this.auth2.isSignedIn.get(),
//       });
//     });
//     window.gapi.load('signin2', function() {
//       // render a sign in button
//       // using this method will show Signed In if the user is already signed in
//       var opts = {
//         width: 200,
//         height: 50,
//         onsuccess: this.onSuccess.bind(this),
//       }
//       gapi.signin2.render('loginButton', opts)
//     })
//   })
// }

// getContent() {
//   if (this.state.isSignedIn) {
//     return <p>hello user, you're signed in </p>
//   } else {
//     return (
//       <div>
//         <p>You are not signed in. Click here to sign in.</p>
//         <button id="loginButton">Login with Google</button>
//       </div>
//     )
//   }

// }

  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Log into Jargah</h2>
        <LoginForm />
      <a href='./Registration'>Register Here</a>
      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>You are not signed in. Click here to sign in.</p>
          <button id="loginButton">Login with Google</button>
          {this.getContent()}     
        </header> */}


              </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
