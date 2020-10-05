import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import Menu from "../components/menu/MenuAuthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png';
import Foot from "../components/foot/Foot";
import { userIsAuthenticated } from "../redux/HOCs";
import { Layout } from 'antd';
import ProfileImage from '../components/UpdatePicture/ProfileImage'
import QuestboardService from "../components/servicesPage/ServicePage"

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      picture: "",
      pictureURL: "",
      data: {}
    }
  }

  componentDidMount() {
    new QuestboardService().NameUser().then(data => {
      this.setState({ data: data.data.user })
    })
  }

  render() {


    const { Header, Content } = Layout;

    return (

      <div className="container">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        <Layout className="site-layout" >
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
          <Content style={{ width: '100%', overflow: 'initial' }} >
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', }}>
              <h2>Welcome, {this.state.data.displayName}, the Hero! </h2>
              <div><ProfileImage /></div>
              <h2>Character Info:</h2>
              {this.state.data.about}
              <hr />

              <br />
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
