import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default function MessageFeed() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">Kwitter</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="">Profile <span class="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link disabled" href="" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Logout<span class="sr-only">(current)</span></a>
                </li>
            </div>
        </nav>
    )
}


