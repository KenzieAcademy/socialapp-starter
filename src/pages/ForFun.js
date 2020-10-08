import React from "react";
import { Link } from "react-rouer-dom";
// import Menu from "../components/menu/Menu";
import App from "../components/Scrolling/App";

class ForFun extends React.Component {
    render() {
        return (
            <div className="ForFun">
                <p>ForFun {this.props.location.pathname}</p>


                <Link to="/">Go Home"</Link>
            </div>
        );
    }
}
export default ForFun;