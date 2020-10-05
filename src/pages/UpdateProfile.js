import React from "react";
import { Layout, } from 'antd';
import "antd/dist/antd.css"
import FileUploader from "../components/UpdatePicture/UpdatePicture"
import MenuAuthenticated from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import ProfileForms from "../components/updatingProfile/ProfileForms"
import Foot from "../components/foot/Foot";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png';


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      username: [],
      picture: null,
    }

  }
  render() {
    const { Content, Header } = Layout;
    return (
      <div class="container">
        <Layout className="site-layout" >
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
          <Content style={{ width: '100%', overflow: 'initial' }} >
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', }}>
              <MenuAuthenticated isAuthenticated={this.props.isAuthenticated} />
              <h2>Update your character sheet!</h2>
              <hr />
              <FileUploader />
              <hr />
              <ProfileForms />
            </div>
          </Content>
          <Foot />
        </Layout>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile)
