import React from "react"
import IndividualProfile from "../UserList/Individual"
import QuestboardService from "../servicesPage/ServicePage"

class Profiles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            AllProfiles: []
        }
    }
    componentDidMount() {
        new QuestboardService().Users().then(AllProfiles => {
            this.setState({ AllProfiles })
        })
    }
    render() {
        let numberOfUsers = this.state.AllProfiles.length
        if (this.state.length === 0)
            return (
                <div id="AllProfilesBox">
                    <h1>Profiles</h1>
                    <h3>loading...</h3>
                </div>
            )
        return (

            <div>
                <div id="AllProfilesBox">
                    <h1>{numberOfUsers} Adventurers!  </h1>
                    {this.state.AllProfiles.map(response => <IndividualProfile key={response.username} {...response} />)}

                </div>
            </div>

        )
    }
}
export default Profiles








