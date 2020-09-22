import React from "react";
import { Button } from 'semantic-ui-react';



function UpdateProfileForm(props) {

    return (

        <form id="profile-form">

            <label htmlFor="displayname">Display Name</label>
            <input
                type="text"
                name="displayName"
                required
                value={props.formData.displayName}
                onChange={props.handleChange}
            />


            <label htmlFor="about">About: </label>
            <input
                type="text"
                height='200 px'
                width='200 px'
                name="about"
                value={props.formData.about}

                onChange={props.handleChange}
            />

            <Button secondary type="submit" onClick={props.handleUpdateProfile}> Update my Profile </Button>


        </form>

    )

}

export default UpdateProfileForm;