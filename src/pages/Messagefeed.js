import React, { Component } from "react";
import "../components/menu/Menu.css";
import DataServices from "../dataService";
import MsgNavBar from "../components/msgnavbar/MsgNavBar";
import Comment from "../components/Comments/Comment";
import Post from "../components/Post/Post";

import "./Messagefeed.css";

import { userIsAuthenticated } from "../redux/HOCs";

import { Layout } from "antd";

const { Header, Sider, Content, Footer } = Layout;

class Messagefeed extends Component {
    constructor(props) {
        super(props)
        this.client = new DataServices();
        this.state =
        {
            messages: [],
            data: [],
            submitted: false,
            author: '',
            children: '',
            date: new Date()


        }
    }




    //Below here, the(function), will reflect a change to the VALUE inside, or of an element
    //onChange attribute should contain this
    componentDidMount = () => {
        this.client.getMessages()
            .then(data => {
                const list = data.data.messages
                this.setState({ ...this.state, messages: list }, () =>
                    console.log(this.state.messages))

            })
    }


    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true,
        }
        )
    }

    authorChangehandler = (event) => {
        let authorName = event.target.value;
        this.setState({ author: authorName })
    }

    childrenChangehandler = (event) => {
        let childrenText = event.target.value;
        this.setState({ children: childrenText })
    }

    buttonHandler = (event) => {
        this.setState({
            data: {
                author: this.state.author,
                children: this.state.children,
                date: this.state.date
            }
        })
        //console.log(this.state.messages[0].text)
        //console.log(this.state.author + ' posted at ' + this.state.date.toLocaleTimeString() + ' ' + this.state.children)


        console.log(this.state.data)

    }

    /*resetForm = (event) => {
        this.setState({
            submitted: false,
            author: '',
            children: ''
        })
    }*/

    render() {






        return (
            <Layout className>
                <MsgNavBar isAuthenticated={this.props.isAuthenticated} />
                <Header>



                </Header>


                <Layout>

                    <Content>

                        <div className="Home">

                            {this.state.messages.map((msg) => (
                                <Comment key={msg.id} {...msg} />

                            ))}
                        </div>

                    </Content>

                    <Sider>
                        <div className="container">
                            <form onSubmit={this.submitHandler} >
                                <span><label>Post Fury Comments</label></span>
                                <div>
                                    <input
                                        onChange={this.authorChangehandler}
                                        className="author"
                                        placeholder="Your name"
                                        type="text"
                                        name="author"
                                        value={this.state.author}
                                    />
                                </div>

                                <div>
                                    <textarea
                                        onChange={this.childrenChangehandler}
                                        placeholder="Post your thoughts"
                                        row="1"
                                        cols="16"
                                        name="children"
                                        value={this.state.children}
                                    >
                                    </textarea>
                                </div>



                                <button
                                    onClick={this.buttonHandler}
                                    id="submitComment"
                                    type="button"
                                >
                                    Submit
                                </button>

                            </form>




                        </div>
                        <Post author={this.state.author} children={this.state.children} date={this.state.date.toLocaleTimeString()} />
                    </Sider>
                </Layout>

                <Footer>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </Footer>



            </Layout>

        );
    }


}


export default userIsAuthenticated(Messagefeed);
