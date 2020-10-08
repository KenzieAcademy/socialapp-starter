import React from "react";
import notFound from "../assets/404-dino.jpg";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import "./NotFound.css";

const { Content } = Layout;

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <Layout className="layout-404">
          <Link to="/">Go Home</Link>
          <Content
            className="content-404"
            style={{ height: "100vh", margin: "0 auto" }}
          >
            <img src={notFound} alt="sadas" />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default NotFound;
