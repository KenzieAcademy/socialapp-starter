import React from "react";
import Menu from "../components/menu/Menu";
import UpdateUser from "../components/updateUser/UpdateUser";
import UserMessages from "../components/userMessages/UserMessages";
import AboutUser from "../components/About/About";
import UpdateAbout from "../components/updateAbout/updateAbout";
import { userIsAuthenticated } from "../redux/HOCs";
import UploadPicture from "../components/getUserPicture/GetUserPicture";
import { Layout } from "antd";

const { Footer, Sider, Content } = Layout;

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Layout>
          <Sider style={{ padding: "15px", background: "#0a3051" }}>
            <UploadPicture />
          </Sider>
          <Layout style={{ background: "#94b1af" }}>
            <Content
              style={{
                height: "100vh",
                margin: "0 auto",
              }}
            >
              <AboutUser />
              <UpdateAbout />
              <UpdateUser />
              <UserMessages />
            </Content>
          </Layout>
        </Layout>
        <Footer
          style={{
            background: "#0a3051",
            color: "#e6e6ea",
            textAlign: "center",
          }}
        >
          {" "}
          Observit ©2020 Created by Team 404
        </Footer>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
