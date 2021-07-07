import React, { Component } from "react"
import UpdateUserPicService from "./UpdateUserPicService"

class UpdateUserPic extends Component {
    constructor(props) {
        super(props)
        this.client = new UpdateUserPicService()
    }

    onChange = (e) => {
        const formData = new FormData()
        const file = e.target.files
        formData.append("picture",file[0])
        this.client.changePic(formData)
        window.location.reload()
    }
    
    render() {
        return (
            <div>
                <div>Update Profile Image</div>
                <input type="file" name="Profile Picture" onChange={this.onChange} />
            </div>
        )
    }
}

export default UpdateUserPic