import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import Menu from "../components/menu/MenuAuthenticated";
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

// const questboardService = new QuestboardService
// const username = questboardService.getUsername()
// const loggedInUsername = questboardService.getUsername()



class Profile extends React.Component {

  state = {
   

  }
    
  render() {

    // for the icons
    const IconFont = createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });



   




    const { Header, Content } = Layout;


    
   
    
   

    return (

      <div class="container">
        <Menu isAuthenticated={this.props.isAuthenticated}></Menu> 



      
      
        <Layout className="site-layout" >
      <Header style={{    }}/>
      <Content style={{ width: '100%', overflow: 'initial' }} >
        <div className="site-layout-background" style={{ padding:24, textAlign: 'center', }}>
          ...
          <br />
          Really
          <div><img className="displayPicture"src={this.state.pictureUrl} alt="user"/></div>
          content
        </div>
      </Content>
      <Foot />
    </Layout>
  


   
       
      </div>

    );
  }
}
export default userIsAuthenticated(Profile);


