import React from "react"
import "../feed/feed.css"

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    toHTML(){
        
        document.getElementById("messagesAndInput").innerHTML += "<div ID='messagesBlock'/>"
        for (let i = 0; i < this.state.items.messages.length; i +=1) {
            let JSONMessage = JSON.stringify(this.state.items.messages[i].text)
            let JSONUser = JSON.stringify(this.state.items.messages[i].username)
            let JSONDate = JSON.stringify(this.state.items.messages[i].createdAt)
            let JSONLikes = JSON.stringify(this.state.items.messages[i].likes.length)
            
            document.getElementById("messagesBlock").innerHTML += 
            "<div class='messageBubble'><h2>" + JSONUser + "</h2> <h3>" + JSONMessage + "</h3><p> Date Created " + JSONDate + "</p><span> Likes " + JSONLikes + "</span><button>Like</button></div>"
        }
    }
    componentDidMount() {
        fetch("https://socialapp-api.herokuapp.com/messages")
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
        console.log("Test =" + this.state.test)
        
        if (!isLoaded) {
            return <div></div>
        } else {
            let toHTML = this.toHTML()
            console.log(items.text)
            return (
                
                <div>
                    <br/>
                    {toHTML}
                </div>
            );
        }
    }
}
export default Feed
