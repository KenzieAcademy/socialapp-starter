import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import { Layout, Menu as Menu2 } from "antd";

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div className="Menu">
        <Layout className="layout">
          <Layout.Header>
            <div className="logo" />

            <Menu2 theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
              <Menu2.Item key="1">nav 1</Menu2.Item>
              <Menu2.Item key="2">nav 2</Menu2.Item>
              <Menu2.Item key="3">nav 3</Menu2.Item>
            </Menu2>
          </Layout.Header>
        </Layout>

        <h1>Observit</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/">Home</Link>

            <Link
              to={`/profile/${
                JSON.parse(localStorage.getItem("login")).result.username
              }`}
            >
              Profile
            </Link>
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
