import React from "react";
import { userIsAuthenticated } from "../../redux/HOCs";
import './Meet.css';
import Menu from "../../components/menu/Menu";

import Arjun from "../../components/assets/images/Squirrels/Arjun.jpg"

// export default class HelloArjun extends Component {
//     render() {
//         return <img url={Arjun} width="100" height="100" />
//     }
// }

class Meet extends React.Component {
    render() {
        return (
            <div className="Meet">
                <Menu isAuthenticated={this.props.isAuthenticated} />

                <div>
                <h1>This is the "Meet the Squirrels" Page</h1>
                <h3>Arjun</h3>
                <div className="Arjun">Hi, Arjun!</div>
                <h3>Ashleigh</h3>
                <div className="Ashleigh">Hi, Ashleigh!</div>
                <h3>Cynthia</h3>
                <div className="Cynthia">Hi, Cynthia!</div>
                <h3>Joseph</h3>
                <div className="Joseph">Hi, Joseph!</div>
                </div>
            </div>
        );
    }
}

// export default Logout

export default userIsAuthenticated(Meet);