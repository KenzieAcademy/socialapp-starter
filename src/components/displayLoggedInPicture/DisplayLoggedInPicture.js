import React from 'react'
import GetLoggedInUserPictureService from "../../services/GetLoggedInUserPictureService"
import "./DisplayLoggedInPicture.css"

class DisplayLoggedInPicture extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageBinary: null
        }

        this.GetLoggedInUserPicture = new GetLoggedInUserPictureService()
    }

    componentDidMount = (event) => {
        this.GetLoggedInUserPicture.GetLoggedInUserPicture().then((result) => {this.setState({
            imageBinary: result.data
        })})
    }

    render() {
        return (
            <div className = "DisplayLoggedInPicture">
                <img src = {this.state.imageBinary} alt = "Profile Picture" />
            </div>
        )
    }
}

export default DisplayLoggedInPicture