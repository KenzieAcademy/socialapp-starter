import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import Menu from "../components/menu/MenuAuthenticated";
import QuestboardService from "../components/servicesPage/ServicePage"
import Foot from "../components/foot/Foot";
import { userIsAuthenticated } from "../redux/HOCs";
import {Layout } from 'antd';


class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pictureUrl: "",
      dotPosition:"top"
    }

  }
  // componentDidMount() {
  //   const questboardService = new QuestboardService()
  //   const loggedInUsername = questboardService.getUsername()

  //   questboardService.GetPicture(loggedInUsername)
  //     .then(pictureObject => {
  //       console.log(pictureObject.request.responseURL)
  //       console.log(pictureObject)
  //       this.setState(latestState => ({ pictureUrl: latestState.pictureUrl + pictureObject.config.url }))
  //     })
  // }
  render() {
    const { Header, Content } = Layout;

    return (

      <div class="container">
        <Menu isAuthenticated={this.props.isAuthenticated}/>

        <Layout className="site-layout" >
          <Header> </Header>
          <Content style={{ width: '100%', overflow: 'initial' }} >
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', }}>
              <div>Username: {this.userName}</div>
              <div>Character:</div>
              <h2>Welcome, {this.username} </h2>
              <hr />
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
