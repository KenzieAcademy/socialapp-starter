import React from "react";
import Clock from "../../pages/clock/Clock";

import PlanetDropdown from "../../components/planetDropdown/PlanetDropdown";


 class SideBar extends React.Component {
    render() {


        return (
        <div>

            <Clock />
            <PlanetDropdown />
        </div>

        )
    }

}

export default SideBar;


