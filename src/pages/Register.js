import React,{Component} from 'react'
import { render } from 'react-dom'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: {
                name: '',
                password: '',
                displayName:''
            }
        }
    }

    handleChange = (event) => {

        const formData = {
            ...this.state.formData
        }
        formData[event.target.name] = event.target.value

        this.setState({
            formData
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
       

    }
    render(){
    return(
        
            <div classNam='Register'>
                
                <form onSubmit={this.handleSubmit}>
                    
                    <div>
                        <label htmlFor='name'> Name: </label>
    
                        <input 
                        type='text' 
                        name='name' 
                        value={this.state.userData.name}
                        onChange={this.handleChange}
                        />
                    </div>

                        <div>
                         <label htmlFor='password'> Password: </label>

                        <input 
                        type='password' 
                        name='name' 
                        value={this.state.userData.password}
                        onChange={this.handleChange}
                        />
                    </div>
                        
                    
                     <div>
                        <label htmlFor='displayName'> Display Name: </label>
    
                    <input 
                        type='text' 
                        name='displayName' 
                        value={this.state.userData.displayName}
                        onChange={this.handleChange}
                        />
                    </div>
    
                     
                </form>
                </div>
     )
    }
}

export default Register
