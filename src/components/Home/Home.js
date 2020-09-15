import React from "react";

import Menu from "../menu/Menu";
import { userIsNotAuthenticated } from "../../redux/HOCs";

import "./home.css"


class Home extends React.Component {
    render() {
        return (
            <div>
            <div className="Home">
                <Menu ></div>
                <div className="homepagestuff"></div>
                    <div className="content">
                    </div>
                </div>
           </div>
           
            
        );
    }
}

export default userIsNotAuthenticated(Home);
