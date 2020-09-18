import React from "react";
import DataService from "../../dataService"

class UpdatePic extends React.Component {
     constructor(props) {
        super(props)
        this.state = {
            username: "",
        };
        this.client = new DataService();
    }
    // componentDidMount() {
    //     this.getAPicture();
    // }
    render() {
        // need to be able to take a pic and place as user photo
    }
}
export default UpdatePic;