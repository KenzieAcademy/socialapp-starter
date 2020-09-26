import React from "react";
import { Button, Form } from 'semantic-ui-react';



function UpdateProfileForm(props) {

    return (

        <Form >
            <hr />
            <div height >
                <Form.Field/>
                <label><strong/>Display Name:<strong/></label>
                <input
                    type="text"
                    name="displayName"
                    required
                    value={props.formData.displayName}
                    onChange={props.handleChange}
                />
                <Form.Field />
                <br/>
                <h5> Display Name is the name that will appeard in your profile</h5>
            </div>
            <hr />
            <div>
                <Form.Field/>
                <label>About: </label>
                <input
                    type="text"
                    height='200 px'
                    width='200 px'
                    name="about"
                    value={props.formData.about}
                    onChange={props.handleChange}
                />
                <Form.Field/>
            </div>
            <br/>
            <hr />
            <Button color="green" type="submit" onClick={props.handleUpdateProfile}> Update my Profile </Button>

        </Form>
    )
}


export default UpdateProfileForm;