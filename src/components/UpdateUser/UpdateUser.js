//import React from "react";

import React, { Component } from "react"
import ClientOptions from '../ClientOptions'
import SocialApp from "../socialapp/SocialApp";

class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.client = new ClientOptions()

        this.state = {
            data: [],
            submitted: false,
            formData: {
                name: '',
                email: '',
            }
        }
    }
    updateProfile() {
        return this.client.UpdateClient()

            
        
    }
    componentDidMount() {
        this.updateProfile()
    }
    handleChange = (event) => {
        const formData = { ...this.state.formData }
        formData[event.target.name] = event.target.value

        this.setState({ formData })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            submitted: true,
            formData: {
                name: this.state.formData.name,
                email: this.state.formData.email,

            }


        })
    }






    render() {
        //may need a if statment for api data
        const getData = this.state.data
        console.log(getData)



        return (
            <div className="UpdateUser">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor=""> Name</label>
                        <input type="text"
                            name="name"
                            value={this.state.formData.firstName}

                            onChange={this.handleChange}
                        />

                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text"
                            name="email"
                            value={this.state.formData.email}

                            onChange={this.handleChange}
                        />

                    </div>

                    <button>Submit</button>
                </form>

                <div>
                    {this.state.data.username}
                    <br />
                    {this.state.data.email}
                </div>
            </div>
        )
    }
}

export default UpdateUser;