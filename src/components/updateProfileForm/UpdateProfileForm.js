import React from "react";
import { Button, Form, Icon } from 'semantic-ui-react';



function UpdateProfileForm(props) {

    return (

        <Form >
            <hr />
            <div height >
                <Form.Field/>
                <label>Display Name:</label>
                <h8>  ...the name that will appeard in your profile</h8>
                <input
                    type="text"
                    name="displayName"
                    required
                    value={props.formData.displayName}
                    onChange={props.handleChange}
                />
                 {/* <h5> Display Name is the name that will appeard in your profile</h5> */}
                <Form.Field />
               
            </div>
            <hr />
            <br/>
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
            <hr />
            <br/>
            <Button color="green" type="submit" onClick={props.handleUpdateProfile}> Update my Profile </Button>

        </Form>
    )
}


export default UpdateProfileForm;