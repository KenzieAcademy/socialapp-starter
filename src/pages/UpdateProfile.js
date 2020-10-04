import React from "react";
import { Layout,} from 'antd';
import "antd/dist/antd.css"
import FileUploader from "../components/UpdatePicture/UpdatePicture"
import Menu from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import ProfileForms from "../components/updatingProfile/ProfileForms"

class Profile extends React.Component {
  constructor(props) {
  super(props) 
    this.state = {
      loading:false,
      username: [],
      picture: null,
    }
    
  }
  render() {
    const {  Content, Footer} = Layout;
    const { loading, imageUrl } = this.state;
    return (
      <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Menu isAuthenticated={this.props.isAuthenticated} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="Profile">
      
       <h2>Update your character sheet!</h2>
       <hr/>
      <FileUploader/>
      <hr/>
     <ProfileForms/>
        </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    );
  }
}
export default userIsAuthenticated(Profile)
