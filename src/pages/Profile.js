import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import Menu from "../components/menu/MenuAuthenticated";
import QuestboardService from "../components/servicesPage/ServicePage"
import theQuestBoardHeader from '../media/theQuestBoardHeader.png';
import Foot from "../components/foot/Foot";
import { userIsAuthenticated } from "../redux/HOCs";
import { Carousel, Layout,BackTop,Image} from 'antd';
import { createFromIconfontCN,AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined, } from '@ant-design/icons';

// comment Content 


class Profile extends React.Component {

  constructor (props) {
  super(props) 
    this.state = {
      picture: "",
     dotPosition: 'top'
    }

  const questboardService = new QuestboardService()
  const userName = questboardService.getUsername()

  }
    
  render() {

    // for the icons
    const IconFont = createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });

    const { dotPosition } = this.state;

    const { Header, Content } = Layout;

    return (

      <div class="container">
        <Menu isAuthenticated={this.props.isAuthenticated}></Menu> 

        <Layout className="site-layout" >
       <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>
      <Content style={{ width: '100%', overflow: 'initial' }} >
        <div className="site-layout-background" style={{ padding:24, textAlign: 'center', }}>
          <div>Username: {this.userName}</div>
            <div>Character:</div>
         <h2>Welcome, {this.username} </h2>
        <hr/>
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
