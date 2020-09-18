import React, { Component } from "react";
//Pages imported below
import Profile from "../pages/Profile";

import { userIsAuthenticated } from "../redux/HOCs";

import { Layout } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

class Messagefeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            comment: ''
        }
    }
    //Below here, the(function), will reflect a change to the VALUE inside, or of an element
    //onChange attribute should contain this
    commentHandler(event) {
        this.setState({ comment: event.target.value });
    }

    authorHandler(event) {
        this.setState({ author: event.target.value });
    }


    handleSubmit(event) {
        alert('submit button was clicked' + this.state.text);
        event.preventDefault();

    }

    render() {
        return (
            <Layout>

                <Header>
                </Header>


                <Layout>

                    <Content>
                        <Profile />
                    </Content>

                    <Sider>
                        <form>
                            <label>Comment Section</label>
                            <textarea row="1" cols="20"></textarea>
                            <button type="submit" value='submit'></button>


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