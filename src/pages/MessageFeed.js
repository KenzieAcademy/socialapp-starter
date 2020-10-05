import React from "react";
import MenuAuthenticated from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageFeed2 from "../components/feed2/Feed2"
import TextInput from "../components/TextInput/TextInput"
import UserList from "../components/UserList/UserList"
import "../components/feed2/feed2.css"
import theQuestBoardHeader from '../media/theQuestBoardHeader.png';
import { Layout } from 'antd';
import Foot from "../components/foot/Foot";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: ""
    }
  }

  stateChange = (event) => {
    this.setState({ post: event.target.value });

  }

  clicked() {
    console.log("clicked")
  }


  render() {

    const { Header, Content } = Layout;

    return (
      <div className="container">
        <Layout className="site-layout" >
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
          <Content style={{ width: '100%', overflow: 'initial' }} >
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', }}>
              <MenuAuthenticated isAuthenticated={this.props.isAuthenticated} />
              <div id="feedAndInput">
                <MessageFeed2 />
                <UserList className="UserList" />
                <TextInput />
              </div>

            </div>

          </Content>
          <Foot />

        </Layout>
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
