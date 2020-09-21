import React from "react"
import { Avatar } from "evergreen-ui"

class AvatarImage extends React.Component {
    constructor(props) {
        super(props)
        this.avatarLocation = `https://socialapp-api.herokuapp.com/users/${this.props.username}/picture`
    }

    

    render () {
        return (
            <Avatar isSolid src={this.avatarLocation} size={40} />

        )
    }

}

export default AvatarImage
