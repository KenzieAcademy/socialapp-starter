import React from "react";
import Menu from "../components/menu/Menu"
import { userIsAuthenticated } from "../redux/HOCs"

class MessageFeed extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // need to call the message list from the user's profile with a variable here for use in the render
        return(
            <div className="MessageFeed">
                <Menu />
                <p>sample text</p>
            </div>
        )
    }
}
export default userIsAuthenticated(MessageFeed)