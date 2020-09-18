import React from "react";
// import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import { Layout, Menu, Breadcrumb } from 'antd';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Button } from 'antd';


class Profile extends React.Component {
  render() {
    const { Header, Content, Footer } = Layout;
    const { Search } = Input;
    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );

    return (
      <div className="Profile">
        {/* <Menu isAuthenticated={this.props.isAuthenticated} /> */}
        <h2>Profile</h2>
       
        <Layout className="layout">
         
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <div className="site-button-ghost-wrapper">

               <Link to='/'> <Button type="Home" ghost> Home</Button></Link>
               <Link to='/messagefeed'> <Button type="Message Feed" ghost>Message Feed</Button></Link>
               <Link to='/' onClick={this.handleLogout}> <Button type="Logout" ghost> Logout</Button></Link>
              </div>

              <Breadcrumb.Item> Home</Breadcrumb.Item>
             <Breadcrumb.Item>Message Feed</Breadcrumb.Item>
             <Breadcrumb.Item>Logout</Breadcrumb.Item>

            </Breadcrumb>
            </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

      </div>






    );
  }
}

export default userIsAuthenticated(Profile);
