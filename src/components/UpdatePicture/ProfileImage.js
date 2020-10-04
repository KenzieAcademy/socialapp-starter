import React from "react"
import QuestboardService from "../servicesPage/ServicePage"

const fallbackImage = "https://www.flaticon.com/svg/static/icons/svg/3456/3456704.svg";

class ProfileImage extends React.Component {
    constructor(props) {
        super(props)

        let imageURL = props.imageURL;
        if (imageURL === undefined) {
            const Questboard = new QuestboardService();
            const username = Questboard.getUsername();

            if (username === null) {
                imageURL = fallbackImage;
            }
            else {
                imageURL = `https://socialapp-api.herokuapp.com/users/${username}/picture`;
            }
        }

        this.state = {
            imageURL: imageURL
        }
    }

    componentDidUpdate() {
        if (this.props.imageURL !== undefined && this.state.imageURL !== this.props.imageURL) {
            this.setState({ imageURL: this.props.imageURL });
        }
    }

    setFallbackImage = event => {
        event.target.src = fallbackImage;
    }

    render() {
        return (
            <img alt="user" src={this.state.imageURL} onError={this.setFallbackImage} />
        )
    }

}
export default ProfileImage