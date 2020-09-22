import React, { Component } from "react";
import "../components/menu/Menu.css";


import CommentBox from "../components/Comments/CommentBox";
//Pages imported below
import Profile from "../pages/Profile";

import { userIsAuthenticated } from "../redux/HOCs";

import { Layout } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

class Messagefeed extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            data: {},
            submitted: false,
            author: '',
            children: ''
        }
    }




    //Below here, the(function), will reflect a change to the VALUE inside, or of an element
    //onChange attribute should contain this
    commentHandler = (event) => {
        this.setState({ comment: event.target.value });
    }

    authorHandler = (event) => {
        this.setState({ author: event.target.value });
    }


    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }


    buttonHandler = (event) => {
        console.log(event.value)
    }

    render() {
        return (
            <Layout>

                <Header>
                    <div>
                        <h1><span>The Dragon's Den</span></h1>
                    </div >
                </Header>


                <Layout>

                    <Content>
                        <Profile />
                        <div className="Home">

                        </div>
                    </Content>

                    <Sider>
                        <form  >
                            <label>Comment Section</label>
                            <CommentBox />
                            <textarea row="1" cols="20"></textarea>
                            <input onClick={this.buttonHandler} id="submitComment" type="button" value="post" ></input>
                        </form>
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