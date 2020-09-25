import React from "react";
import Clock from "../clock/Clock";


class SideBar extends React.Component {
    render() {


        return (
            <div className="SideBar">
                What Time IS It?
                <Clock />
            </div>
        );
    }

}

export default SideBar;


