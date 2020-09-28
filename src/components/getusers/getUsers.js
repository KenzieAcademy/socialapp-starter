import React from 'react';



class GetUsers extends React.Component{
    render(){
        return(
            <li className="GetUsers">
                {this.props.username}'s name is {this.props.displaName} 
                <br />
                {this.props.text}
                   
            </li>
        )
    }
}


export default GetUsers;