import React from "react"
import { Link } from "react-router-dom"
import { withAsyncAction } from "../../redux/HOCs"
import "bootstrap/dist/css/bootstrap.min.css"

class Navigation extends React.Component {

    handleLogout = event => {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="">Kwitter</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="" > Message Feed <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="" >Profile <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <li className="nav-item active">
                        <Link to="/" onClick={this.handleLogout}>Logout</Link>
                    </li>
                </div>
            </nav>


        )
    }
}
export default withAsyncAction("auth", "logout")(Navigation);