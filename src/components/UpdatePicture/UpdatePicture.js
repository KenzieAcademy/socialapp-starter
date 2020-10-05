import { notification } from "antd"
import React from "react"
import QuestboardService from "../servicesPage/ServicePage"
import ProfileImage from "./ProfileImage"


class FileUploader extends React.Component {
    constructor(props) {
        super(props)
        this.Questboard = new QuestboardService();
        const username = this.Questboard.getUsername();

        this.defaultProfileImage = `https://socialapp-api.herokuapp.com/users/${username}/picture`;
        this.state = {
            imageURL: this.defaultProfileImage,
            formData: null,
        }
    }

    createFormData = event => {
        const file = (event.target.files[0])
        const formData = new FormData()
        formData.append("picture", file)
        this.setState({ formData })
    }

    handleUpload = event => {
        event.preventDefault()

        this.Questboard.SetPicture(this.state.formData)
            .then(response => {
                const timestamp = Date.now()
                this.setState({ imageURL: `${this.defaultProfileImage}?t=${timestamp}` })

                notification.open({
                    message: "Upload successful!",
                })
            })
    }

    render() {
        return (
            <div className="FileUploader">
                <input type="file"
                    name="picture"
                    onChange={this.createFormData} />
                <button onClick={this.handleUpload}>Upload</button>
                <div className="image-preview">
                    <ProfileImage imageURL={this.state.imageURL} />
                </div>
            </div>
        )
    }

}
export default FileUploader