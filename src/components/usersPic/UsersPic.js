import React from "react";

class UsersPic extends React.Component {
    render() {
        return (
            <div className="UsersPic">
                <form method="post" enctype="multipart/form-data">
                    <label for="UsersPic">Choose file to upload</label>
                    <input type="file" accept="image/*" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UsersPic;