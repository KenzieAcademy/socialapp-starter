import React, { Component } from "react";
import { Layout } from 'antd';
const { Sider, Content } = Layout;

class Messagefeed extends Component {
    constructor(props) {
        super(props)
        state = 
        
    }

    render() {
        return (
            <Layout>

                <Sider>

                    <div>
                        <input type="text" placeholder="create a post"></input>
                        <button>Post</button>
                        <p></p>
                    </div>

                </Sider>

                <Layout>
                    <Content>Content</Content>
                </Layout>

            </Layout >

        );
    }
}

export default Messagefeed;