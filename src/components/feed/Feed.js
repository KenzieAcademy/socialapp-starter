import React from "react";
import { Layout } from 'antd';
import QuestboardService from "../../pages/ServicePage"
import Message from "./Message"


class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

    
      componentDidMount() {
        new QuestboardService()
        .GetMessageList()
        .then(messages => {
          this.setState({messages})
        })
      }

  render() {

    const { Header, Content, Footer} = Layout;
    if (this.state.messages.length === 0){
    return (
      <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <h2>Message Feed</h2>
        Test Feed Test Test
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    );
    }
    else {
      return (
        <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="mainHeader" style={{ padding: 0 }} />
      <Header className="subHeader" ><h2>Message Feed</h2> </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

        <div><ul>
    {this.state.messages.map (msg => <Message  key={msg.id} {...msg} />)}
        </ul></div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
        
      )
    }
  }
}

export default Feed;
