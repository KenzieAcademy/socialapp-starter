import React, { Component } from 'react'
import axios from 'axios'

class Api extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            person:[]
        }
    }
    componentDidMount() {
        axios.get('https://github.com/EBIII1977/socialapp-starter.git/auth/login')
        .then(res => {
            const person = res.data;
            this.setState({person})
        })
    }
    render() { 
        return ( 
            <div>
                <ul>
                    {this.state.person.map(person => 
                       <li>{person.name}</li> )}
                </ul>
            </div>
         );
    }
}
 
export default Api;
