import React from "react"
import DataService from "../../dataService"
import '../updateUser/UpdateUser.css'

const dataService = new DataService()

class FileUploader extends React.Component {
    state = { 
        imageURL: `https://socialapp-api.herokuapp.com/users/${dataService.getUsername()}/picture`,
        formData: null
    }
    
    setFallbackImage = event => {
        event.target.src = "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
    }

    createFormData = event => {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append("picture", file)
        //console.log(event.target.files[0])
        //console.log(file)
        //console.log(formData)
        this.setState({ formData })
    }

    handleUpload = () => {
        dataService.uploadPicture(this.state.formData).then(response => {
            console.log(response)
            if (response.data.stateCode === 200) {
                this.updatePicture()
            }
        })
    }

    updatePicture () {
        const timestamp = Date.now()
        const imageURL = `https://socialapp-api.herokuapp.com/users/${dataService.getUsername()}/picture?t=${timestamp}`
        this.setState({ imageURL })
    }

    render () {
        return (
            <div className="FileUploader">
                <div className="image-preview">
                    <img 
                        alt="user" 
                        src={this.state.imageURL}
                        onError={this.setFallbackImage}
                        width="200"
                        height="200"
                    />
                </div>
                <br />
                <div className="image-preview">
                    <input 
                        name="picture" 
                        type="file" 
                        onChange={this.createFormData} 
                    />
                </div>
                <button onClick={this.handleUpload}>Upload</button>
            </div>
        )
    }
}

export default FileUploader