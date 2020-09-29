import React from "react"

class GoogleAuth extends React.Component {
constructor(props){
    super(props)
    this.state = {
        loginWindow: null,
    }
}



handleMessage = (event) => {
    if (window.event.origin === undefined) {
        console.log("this works.")
        window.event = window.event.originalEvent;
    }

    if (window.event.origin !== window.location.origin) {
        console.log("this works.")
        return;
    }

    if (window.event.data.statusCode === 200) {
        console.log("this status thing works.")
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

componentDidMount() {
    window.addEventListener('message', this.handleMessage.bind(this) )
}

handleClick = (event) => {
// when user clicks login with Google....
this.setState({loginWindow: window.open("https://socialapp-api.herokuapp.com/auth/google/login/") })
}
    render(){
        return(
        <div>


        <button onClick={this.handleClick}>Login with Google</button>
        </div>
        )
    }
}

export default GoogleAuth 