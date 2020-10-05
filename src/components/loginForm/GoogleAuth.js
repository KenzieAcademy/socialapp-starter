import React from "react"
import { store } from '../../redux'
import { withAsyncAction } from "../../redux/HOCs";
import { Button } from 'antd';

class GoogleAuth extends React.Component {
constructor(props){
    super(props)
    this.state = {
        loginWindow: null
    }
}

handleMessage = (event) => {
    if (window.event.origin === undefined) {
        window.event = window.event.originalEvent;
    }

    if (window.event.origin !== "https://socialapp-api.herokuapp.com") {
        return;
    }

    if (window.event.data.statusCode === 200) {
        const { username, token} = event.data
        store.dispatch({
            type: "LOGIN.SUCCESS",
            payload: { username, token }
        })
        

        if (this.state.loginWindow !== null) {
            this.state.loginWindow.close();
            this.setState({
                loginWindow: null 
            })
        }

        window.location = "/";
    }
};

componentDidMount() {
    window.addEventListener('message', this.handleMessage.bind(this) )
}

handleClick = (event) => {
this.setState({loginWindow: window.open("https://socialapp-api.herokuapp.com/auth/google/login/") })
}
    render(){
        return(
        <div>

        <Button onClick={this.handleClick}>Login with Google</Button>
        </div>
        )
    }
}

export default withAsyncAction("auth", "login")(GoogleAuth)