import { handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"

class UpdateUserPicService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "users/";
        this.client = client;
    }

    changePic(pictureFile) {
        const loginData = JSON.parse(localStorage.getItem("login"));

        fetch(this.url + loginData.result.username + "/picture", {
            method: "PUT",
            headers: { 
                Authorization: `Bearer ${loginData.result.token}` },
            body: pictureFile
        })
        .then(handleJsonResponse)
        .then(result => {
            return result
        })
    }
};

export default UpdateUserPicService;