import React from "react";
import { Button } from 'semantic-ui-react';



function UpdateProfileForm(props) {

    return (

        <form id="profile-form">
            <hr/>
<div height >
            <label htmlFor="displayname">Display Name</label>
            <input
                type="text"
                name="displayName"
                required
                value={props.formData.displayName}
                onChange={props.handleChange}
            />
            <h5> Disply name is the name that will be appeard in your profile</h5>


</div>
<hr/>

<div>
            <label htmlFor="about">About: </label>
            <input
                type="text"
                height='200 px'
                width='200 px'
                name="about"
                value={props.formData.about}
                onChange={props.handleChange}
            />
</div>
<hr/>
            <Button secondary type="submit" onClick={props.handleUpdateProfile}> Update my Profile </Button>
        

        </form>
    )
}
    

export default UpdateProfileForm;