import React from "react";
import {render} from "react-dom";
import DataService from "../../DataService";

class addLikes {
    constructor(props){
        super(props)
        this.state = {};
        this.client = new DataService();
    }
}

export default addLikes;
