import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/MenuAuthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png';
import Footer from "../components/footer/Footer";



import { BackTop, Layout } from 'antd';
import { UpOutlined } from '@ant-design/icons';





// comment section 



class Profile extends React.Component {
  super(props) {
    this.state = {
      user: [],
      picture: "",
    }





  }





  render() {




    const { Header, Footer, Sider, Content } = Layout;

    // for backtop
    const style = {
      height: 60,
      width: 60,
      lineHeight: '40px',
      borderRadius: 4,
      backgroundColor: '#47170e',
      color: '#e0d8c0',
      textAlign: 'center',
      fontSize:20,
    };

    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />

        
          
            
       
        



        

    
        <Footer />
        <BackTop>
          <div style={style}><UpOutlined /></div>
        </BackTop>
      </div>

    );
  }
}
export default userIsAuthenticated(Profile);
