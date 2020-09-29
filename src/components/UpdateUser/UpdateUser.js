//import React from "react";

import React, { Component } from "react"
import ClientOptions from '../ClientOptions'
import SocialApp from "../socialapp/SocialApp";
import GetUsersService from '../getUsers/GetUsersService'
import { displayName } from "react-spinkit";
class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.client = new ClientOptions()

        this.state = {
            
            
            password: '',
            displayName: '',
            about: '',
        }
    }
    updateProfile() {
        return this.client.UpdateClient()

            
        
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.client.UpdateClient(this.state)
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
                            name="displayName"
                            

                            onChange={this.handleChange}
                        />

                    </div>

                    <div>
                        <label htmlFor="">about</label>
                        <input type="text"
                            name="about"
                            

                            onChange={this.handleChange}
                        />
                        <label htmlFor="">Password</label>
                        <input type= "text"
                        name= "password"
                        onChange={this.handleChange}
                        
                        
                        />


                    </div>

                    <button type= 'submit'>Submit</button>
                </form>

                
            </div>
        )
    }
}

export default UpdateUser;