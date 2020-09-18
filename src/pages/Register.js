import React from 'react'
import RegisterForm from "../components/RegisterForm/RegisterForm"
import {userIsNotAuthenticated} from '../redux/HOCs'

class Registration extends React.Component {
	render() {
		return (
            <RegisterForm />
		);
	}
}

export default userIsNotAuthenticated(Registration)
