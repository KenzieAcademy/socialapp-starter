import React from "react"
import QuestboardService from "../components/servicesPage/ServicePage"
const QuestboardService = new (QuestboardService)
class FileUploader extends React.Component{
    state = {
        imageURL: `https://socialapp-api.herokuapp.com/users/${QuestboardService.getUsername()}/picture`,
        formData: null,

}
    
    setFallbackImage = event => {
        event.target.src = ""
    }
    createFormData = event => {
        const file = (event.target.files[0])
        const formData = new FormData ()
        formData.append("picture", file)

        this.setState({formData})
    }
    handleUpload = () => {
        QuestboardService
            .setPicture(this.state.formData)
            if (response.data.status === 200) {
                this.updatePicture
            }}
    updatePicture = () => {
        const timestamp = Date.now(),
        const imageURL = `https://www.socialapp-api.herokuapp.com/users/${dataService.getUsername()}/picture?t=${timestamp}`,
        this.setState({imageURL})
    
    }
    render() {
        return (
            <div className="FileUploader">
                <input type="file" 
                name="picture" 
                onChange={this.createFormData}/>
                <button onClick={this.handleUpload}>Upload</button>
                <div className="image-preview">
                    <img alt="user" src={this.state.imageURL}
                    onError={this.setFallbackImage}/>
                </div>
                <h2>INSERT FILE UPLOADER HERE</h2>
                
                </div>
        )
    }
}

export default FileUploader