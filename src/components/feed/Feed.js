import React from "react";
import { Layout } from 'antd';
import QuestboardService from "../../pages/ServicePage"


class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {
        "id": null,
        "text": "",
        "username": "",
        "createdAt": "",
        "likes": [
          {
            "id": null,
            "username": "",
            "messageId": null,
            "createdAt": ""
          }
        ]
      }
    }

    this.client = new QuestboardService();
  }

  getMessages() {
    return this.client.GetMessageList().then(result => {
      this.setState({
        messages: result.data
      // alert(JSON.stringify(result.data))
      })
    })
  }

  componentDidMount() {
    this.getMessages();

  }

  render() {

    const { Header, Content, Footer} = Layout;
    return (
      <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <h2>Message Feed</h2>
        is it working?
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    );
  }
}

export default Feed;
