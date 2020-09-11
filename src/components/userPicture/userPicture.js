import React from "react";
import DataService from "../../dataService"

class UserPicture extends React.Component {
     constructor(props) {
        super(props)
        this.state = {
            username: "",
        };
        this.client = new DataService();
    }
    componentDidMount() {
        this.getuserPicture();
    }
    render() {
        
    }
}
export default UserPicture;