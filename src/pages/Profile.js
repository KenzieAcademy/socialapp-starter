import React from "react";
import Menu from "../components/menu/Menu";
import UpdateUser from "../components/updateUser/UpdateUser";
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
          <Sider style={{ padding: "15px" }}>
            <UploadPicture />
          </Sider>
          <Layout>
            <Content style={{ height: "100vh" }}>
              <UpdateUser />
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
