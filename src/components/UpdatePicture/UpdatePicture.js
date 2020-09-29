import React from "react"
import QuestboardService from "../servicesPage/ServicePage"

const Questboard = new QuestboardService()

class FileUploader extends React.Component{
    
    state = {
        imageURL: `https://socialapp-api.herokuapp.com/users/${Questboard.getUsername()}/picture`,
        formData: null,}

    setFallbackImage = event => {
        event.target.src = "https://www.flaticon.com/free-icon/no-war_3456704"
    }
    createFormData = event => {
        const file = (event.target.files[0])
        const formData = new FormData ()
        formData.append("picture", file)
        this.setState({formData})
    }
    
    handleUpload = () => {
        Questboard.SetPicture(this.state.formData)
        .then( response => {
            if (response.data.status === 200) {
                console.log("This works")
                this.updatePicture()
            }})
        }
    updatePicture = () => {
        const timestamp = Date.now()
        const imageURL = `https://www.socialapp-api.herokuapp.com/users/${Questboard.getUsername}/picture?t=${timestamp}`
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
                </div>
        )
    }

}
export default FileUploader