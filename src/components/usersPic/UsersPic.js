import React from "react";
import DataService from "../../DataService";

class UsersPic extends React.Component {
    handlePic = (event) => {
        event.preventDefault()
        console.log("click")
        const formData = new FormData(event.target)
        const dataService = new DataService()
        dataService.setUserPicture(formData).then(response => { console.log(response) })
    }
    render() {
        return (
            <div className="UsersPic">
                <form onSubmit={this.handlePic}>
                    <label htmlFor="UsersPic">Choose file to upload</label>
                    <input type="file" name="picture" accept="image/*" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UsersPic;