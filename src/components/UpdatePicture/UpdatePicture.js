import { WindowsFilled } from "@ant-design/icons"
import { notification } from "antd"
import React from "react"
import QuestboardService from "../servicesPage/ServicePage"

const Questboard = new QuestboardService()
const username = Questboard.getUsername()

class FileUploader extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
        imageURL: `https://socialapp-api.herokuapp.com/users/${username}/picture`,
        formData: null,}

    
}
    setFallbackImage = event => {
        event.target.src = "https://www.flaticon.com/free-icon/no-war_3456704"
    }
    createFormData = event => {
        const file = (event.target.files[0])
        const formData = new FormData ()
        formData.append("picture", file)
        this.setState({formData})
        
    }
    // componentDidUpdate(prevProps, prevState){
    //     if (prevState.imageURL !== this.state.imageURL){
    //         this.updatePicture()
    //     }
    //   }
//         updatePicture = () => {
//         const timestamp = Date.now()
//         const imageURL = `https://www.socialapp-api.herokuapp.com/users/${username}/picture?t=${timestamp}`
//         this.setState({imageURL})
//         }
// // 
    handleUpload = event => {
        event.preventDefault()
        Questboard.SetPicture(this.state.formData)
        .then( response => {
            (notification.open({
            message: "Upload successful!",
            description: "Reloading page..."}))
            // if (response.data.statusCode === 200) {
            //     console.log("This works")
            //     this.updatePicture()
            // }
            window.location.reload()
        })
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
                    // onError={this.setFallbackImage}
                    />
                </div>
                </div>
        )
    }

}
export default FileUploader