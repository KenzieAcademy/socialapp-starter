import React from "react";

import Menu from "../menu/Menu";
import { userIsNotAuthenticated } from "../../redux/HOCs";

import "./Home.css"


class Home extends React.Component {
    render() {
        return (
            <div className="hero">
            <div className="test">
            <Menu />
            <div className="homepagestuff">
               
            </div>
       
            </div>
            </div>
           
           
            
        );
    }
}
 //<div className="hulk"></div>
export default userIsNotAuthenticated(Home);