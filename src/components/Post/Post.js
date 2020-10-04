import React from "react";

function Post(props) {

    return (
        <div className="Post">
            <div>
                <form onSubmit={props.submitHandler} >
                    <span><label>Post Fury Comments</label></span>

                    <input
                        onChange={props.authorHandler}
                        className="author"
                        placeholder="Your name"
                        type="text"
                        name="name"
                    >

                    </input>

                    <textarea
                        onChange={props.childrenHandler}
                        placeholder="Post your thoughts"
                        row="1"
                        cols="16"
                        value={props.text}
                    >
                    </textarea>

                    <button
                        onClick={props.buttonHandler}
                        id="submitComment"
                        type="button"
                    >
                        Submit
                    </button>

                </form>



                <span>{props.likes}</span>
            </div>
        </div>
    )
}


export default Post;