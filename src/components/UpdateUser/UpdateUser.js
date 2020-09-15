//import React from "react";

import React , { Component } from "react"
import SocialApp from "../socialapp/SocialApp";

class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.client = new SocialApp()

        this.state = {
            data: [], 
            submitted: false,
            formData: {
                name: '',
                email: '',
            }
        }
    }
    updateProfile (){
        return this.client.edituser().then(result => {
            this.setState({
                data: result.data

            })
        })
    }
    componentDidMount(){
        this.updateProfile()
    }
    handleChange = (event) => {
        const formData = {...this.state.formData}
        formData[event.target.name] = event.target.value

        this.setState({formData})
    }
    handleSubmit = (event) => {
        event.preventDefault()
            this.setState({
                submitted: true,
                formData:{
                    name: this.state.formData.name,
                    email: this.state.formData.email,

                }


            })
    }
    
            
    

        

    render() {
        //may need a if statment for api data
        if(this.state.submitted){
            return(
                <div className="UpdateUser">
                 <p>Thank you, {this.state.formData.name}, for submitting the form. </p> 
                   
                </div>
            )
        }


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
                    {this.state.formData.name}
                    <br/>
                    {this.state.formData.email}
                </div>
            </div>
        )
    }
}

export default UpdateUser;