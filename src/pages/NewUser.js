import React from "react"

class NewUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            displayName: "",
            password: ""
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
            </div>
        )
    }

}

export default NewUser;