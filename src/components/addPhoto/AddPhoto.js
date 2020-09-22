import React from 'react'
import { Image } from 'semantic-ui-react'
import { userIsAuthenticated } from "../../redux/HOCs";
import socialAppService from '../../socialAppService';
class UploadImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {},

            picLocation: `https://socialapp-api.herokuapp.com/users/${JSON.parse(localStorage.getItem("login")).result.username}/picture`


        }
        this.client = new socialAppService()
    }


    handleUploadImage = e => {
        e.preventDefault();
        let formData = this.fileUpload(this.state.picture)
        this.client.putPhoto(formData).then(() => {
            this.setState({ state: this.state })
        })

    }
    fileUpload(file) {
        let formData = new FormData()
        formData.append("picture", file)
        return (
            formData
        )
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onFileChange = e => {
        let formData = this.state.formData
        formData[e.target.name] = e.target.value
        let pictureSet = this.state.formData.pictureSet
        if (e.target.files !== undefined) {
            pictureSet = e.target.files[0]
        }
        this.setState({
            picture: pictureSet
        })
    }

    render() {
        console.log("render");
        return (
            <div>
                <h3>User's Name</h3>
                <form id="upload-image" onSubmit={this.handleUploadImage}>

                    <input type="file"
                        onChange={this.onFileChange}
                    />
                    <br></br>

                    <button type="submit">
                        Upload a Photo
                    </button>
                </form>
                <Image src={this.state.picLocation} size='small' circular />

            </div>
        )
    }
}



export default userIsAuthenticated(UploadImage)

// const ImageExampleImage = () => (


//     <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' circular />
// )