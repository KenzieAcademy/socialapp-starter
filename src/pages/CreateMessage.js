import React from "react"
import Menu from "../components/menu/Menu"
import FetchService from "../FetchService"
import {userIsAuthenticated} from "../redux/HOCs"

class CreateMessage extends React.Component {
    constructor(props) {
        super(props)
        this.client = new FetchService()

    }

    render() {
        return (
            <div className="CreateMessage">
                <Menu isAuthenticated={this.props.isAuthenticated}/>
            </div>
        )
    }
}









export default userIsAuthenticated (CreateMessage)