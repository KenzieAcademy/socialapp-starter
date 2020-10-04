import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import Menu from "../components/menu/MenuAuthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png';
import Foot from "../components/foot/Foot";
import QuestboardService from "../components/servicesPage/ServicePage"
import { userIsAuthenticated } from "../redux/HOCs";
import { Layout } from 'antd';
import ProfileImage from '../components/UpdatePicture/ProfileImage'


// comment Content 


class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      picture: "",
      pictureURL: ""
    }

  }

  render() {

    const { Header, Content } = Layout;

    return (

      <div class="container">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <Layout className="site-layout" >
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
          <Content style={{ width: '100%', overflow: 'initial' }} >
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', }}>
              <h2>Welcome, {this.username} </h2>
              <div><ProfileImage /></div>
              <div>Username: {this.displayName}</div>
              <div>Character: {this.about}</div>
              
              <hr />
              
              <br/>
              <Link to="/UpdateProfile">Update your Character Sheet!</Link>

            </div>
          </Content>
          <Foot />

        </Layout>

      </div>

    );
  }
}
export default userIsAuthenticated(Profile);
