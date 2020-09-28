import React from "react"

class GoogleAuth extends React.Component {
constructor(props){
    super(props)
    this.state = {
        loginWindow: null,
    }
}

componentDidMount() {
    window.addEventListener('message', this.handleMessage )
}

handleMessage = () => {
    if (window.event.origin === undefined) {
        window.event = window.event.originalEvent;
    }

    // verify the message is from us
    let origin = window.location.protocol + '//' + window.location
        .host;

    if (window.event.origin !== origin) {
        return;
    }

    if (window.event.data.statusCode === 200) {
        this.username = window.event.data.username;
        this.token = window.event.data.token;

        if (this.state.loginWindow !== null) {
            this.loginWindow.close();
            this.setState({
                loginWindow: null 
            })
        }

        window.location = "/"; // wherever you want to redirect the user to
    }
};



handleClick = (event) => {
// when user clicks login with Google....
this.state.loginWindow = window.open("https://socialapp-api.herokuapp.com/auth/google/login/");
}
    render(){
        return(
        <div>test test


        <button onClick={this.handleClick}>Login with Google</button>
        </div>
        )
    }
}

export default GoogleAuth 