import React from "react";
import DataService from "../../DataService";

class UsersPic extends React.Component {

    handlePic = (event) => {
        event.preventDefault()
        let username = false
        if (JSON.parse(localStorage.getItem('login')).result != null) {
            username = JSON.parse(localStorage.getItem('login')).result.username
        }
        console.log("click")
        const formData = new FormData(event.target)
        const dataService = new DataService()
        dataService.setUserPicture(formData).then(response => {
            // console.log(formData)
            if (response.data.statusCode === 200) {
                alert("You have successfully updated your profile picture")
                window.location.href = "/profile/" + username 
            } else {
                alert("Something went wrong, please try again")
            }
        })
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