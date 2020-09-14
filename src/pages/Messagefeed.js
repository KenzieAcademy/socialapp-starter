import React, { Component } from "react";

class Messagefeed extends Component {
    render() {
        return (
            <div className="Messages">
                <form className='feed'>
                    <label>Create a Post</label>
                    <input type="text" placeholder="Post here"></input>
                    <buttton type="submit">Submit</buttton>
                    <input id="addPost"></input>

                </form>
            </div>
        );
    }
}

export default Messagefeed;