import React from "react"
import { userIsAuthenticated } from "../../redux/HOCs"

class PostMessage extends React.Component {
   
}
 
export default userIsAuthenticated(PostMessage)