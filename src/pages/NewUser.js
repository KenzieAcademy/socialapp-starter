import React from "react"

import { Link } from "react-router-dom";

class NewUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            displayName: "",
            password: "",
        }
    }
    render() {
        return(
            <div>
                <form>
                    <div>username</div>
                    <input className="username"></input>

                    <div>displayName</div>
                    <input className="displayName"></input>

                    <div>password</div>
                    <input className="password"></input>
                </form>
                <button>
                    Submit
                </button>
                <br/>
                <Link to="/">Go Home</Link>
            </div>
        )
    }

}

export default NewUser;