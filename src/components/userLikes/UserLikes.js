import React from "react";
import Spinner from "react-spinkit";
import DataService from "../../DataService";
import NewMessage from "../components/NewMessage/NewMessage";


handleLikes = e => {
    e.preventDefault();
    this.client.UserLikes(this.state).then(result => {
        alert(result.data)
        {
            "like": {
                "id": 0,
                    "username": "string",
                        "messageId": 0,
                            "createdAt": "2020-09-21T18:50:37.453Z"
            },
            "statusCode": 0
        }
    }
<button button type="submit" disabled={loading} > Like Message
 </button>
        <img className="thumbUp" src={thumbUp} alt="thumbUp" />
    )
}
// //     handleChange = e => {
// //         this.setState({ [e.target.name]: e.target.value });
// //     }
// //     render() {
// //         const { loading, error } = this.props;
// //         return (

//Antd  ant.design / components / icon /

// //                 {loading && <Spinner name="circle" color="blue" />}
// //                 {error && <p style={{ color: "red" }}>{error.message}</p>}
// //             </div>
// //         );
// //     }
// // }

// // export default UserLikes
