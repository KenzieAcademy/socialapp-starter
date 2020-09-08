import axios from 'axios';
import React from 'react'



class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    registerUser(userData){
        return this.client.post(this.url/users,
            userData )
         
    }

   
}
export default DataService;