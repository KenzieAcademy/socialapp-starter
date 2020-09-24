import React from 'react'
import RegistrationForm from "../components/registrationForm/RegistrationForm"
import Container from '@material-ui/core/Container';


class Registration extends React.Component {
    render() {
        return(
            <div className = "Registration">
                <Container maxWidth = "sm">
                <h2>Register to join the Abyss</h2>
                <RegistrationForm />
                </Container>
            </div>

        )
    }




}

export default(Registration) 