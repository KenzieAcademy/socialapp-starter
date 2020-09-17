import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import { Layout } from 'antd';
import Title from "antd/lib/skeleton/Title";
import Avatar from "antd/lib/avatar/avatar";


const { Header, Footer, Sider, Content } = Layout;


class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        {/* <h1>Twitter</h1> */}
        <Layout>
          <Header>
            <Avatar icon="user" />
            <Title>Twitter</Title>
          </Header>
          <Layout>
            <Sider style={{ background: 'red' }}>Sider</Sider>
            <Layout>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Layout>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
