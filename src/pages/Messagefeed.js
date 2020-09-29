import React, { Component } from "react";
import "../components/menu/Menu.css";
import DataServices from '../dataService';
import CommentBox from "../components/Comments/CommentBox";
//Pages imported below
import Profile from "../pages/Profile";

import { userIsAuthenticated } from "../redux/HOCs";

import { Layout } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

class Messagefeed extends Component {
    constructor(props) {
        super(props)
        this.client = new DataServices();
        this.state =
        {
            messages: [],
            data: {},
            submitted: false,
            author: '',
            children: ''
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
            submitted: true
        })
    }
    handleChange = (event) => {
        let comment = event.target.value;
        console.log(comment)
        this.setState({ children: comment });
    }

    buttonHandler = (event) => {
        console.log(this.state.messages[0].text)
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
                        <div className="Home">
                            {this.state.messages.map((msg) => (
                                <div>
                                    <span>
                                        `${msg.username} posted at ${msg.createdAt},
                                        message: ${msg.text}`


                                    </span>
                                </div>
                            ))}
                        </div>
                    </Content>

                    <Sider>
                        <form  >
                            <label>Comment Section</label>
                            <CommentBox />


                            <textarea onChange={this.handleChange} row="1" cols="20"></textarea>
                            <button onClick={this.buttonHandler} id="submitComment" type="button" value="post" >Submit</button>
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