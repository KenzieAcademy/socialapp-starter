import React from 'react'
import RegistrationForm from "../components/registrationForm/RegistrationForm"
import Container from '@material-ui/core/Container';
import "../components/registrationForm/RegistrationForm.css"


class Registration extends React.Component {
    render() {
        return(
            <div className = "reg">
            <div className = "Registration">
                <Container maxWidth = "sm">
                <h2>Register to join the Abyss</h2>
                <RegistrationForm />
                </Container>
            </div>
            </div>

        )
    }




}

export default(Registration) 