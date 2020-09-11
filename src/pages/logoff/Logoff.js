import React from "react";
import { userIsNotAuthenticated } from "../../redux/HOCs";
import './Logoff.css';
import Menu from "../../components/menu/Menu";

class Logoff extends React.Component {
    render() {
        return (
            <div className="Logoff">>
                <Menu isNotAuthenticated={this.props.isNotAuthenticated} />

                <div>
                <h1>GOOD BYE</h1>
                <h3>GOOD BYE</h3>
                <h6>GOOD BYE</h6>
                <br />
                <br />
                <h1>COME BACK SOON</h1>
                <h3>COME BAAACK SOON</h3>
                <h6>COME BACK SOOOOOON!!!</h6>
                </div>
            </div>
        );
    }
}

// export default Logout

export default userIsNotAuthenticated(Logoff);