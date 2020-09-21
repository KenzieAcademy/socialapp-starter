import React from "react"
import "../Profiles/Profiles.css"
import { Link } from "react-router-dom";

class Profiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    toHTML(){
        document.getElementById("appendToThis").innerHTML += "<div ID='ProfileSection'/>"
        document.getElementById("ProfileSection").innerHTML += "<H1>Profiles</H1>"
        document.getElementById("ProfileSection").innerHTML += "<div ID='profileBubble'/>"
        for (let i = 0; i < this.state.items.users.length; i +=1) {
            let ProfileString = JSON.stringify(this.state.items.users[i].username)
                document.getElementById("profileBubble").innerHTML += "<h1>" + ProfileString + "</h1>"
        }
    }
    
    componentDidMount() {
        fetch("https://socialapp-api.herokuapp.com/users")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        })
    }
    
    render() {
        
        var { isLoaded, items, test } = this.state;
        
        if (!isLoaded) {
            return <div></div>
        } else {
            let toHTML = this.toHTML()
            return (
                
                <div>
                    {toHTML}
                </div>
            );
        }
    }
}
export default Profiles