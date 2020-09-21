import React from "react";
// import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
 

import { Layout, Carousel, Menu, Card, Col, Row, BackTop } from 'antd';
import {
  UpOutlined, 
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  createFromIconfontCN,
} from '@ant-design/icons';


// comment section 



class Profile extends React.Component {
  super(props) {
    this.state = {
      user: [],
      picture: "",
    }





  }





  render() {
   

    
    // for the icons
    const IconFont = createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });

    const { Header, Content, Footer, Sider } = Layout;
    const contentStyle = {
      height: '200px',
      color: '#fff',
      lineHeight: '200px',
      textAlign: 'center',
      background: 'blue',
    };
// for backtop
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

    return (
      <div className="Profile" style={{ height: '600vh', padding: 8 }}>
        <Menu isAuthenticated={this.props.isAuthenticated} />


       
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
        </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
        </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
        </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                nav 4
        </Menu.Item>
              <Menu.Item key="5" icon={<CloudOutlined />}>
                nav 5
        </Menu.Item>
              <Menu.Item key="6" icon={<AppstoreOutlined />}>
                nav 6
        </Menu.Item>
              <Menu.Item key="7" icon={<TeamOutlined />}>
                nav 7
        </Menu.Item>
              <Menu.Item key="8" icon={<ShopOutlined />}>
                nav 8
        </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>


              
              
              
              
                content
        </div>
            </Content>
            <Footer style={{ textAlign: 'center' }} ><em><b> Designed Using Ant  ©2018 by Klinesettes</b></em>
           

                {/*  */}
             
              <Carousel  autoplay autoplaySpeed="15">
                {/* start of the dev card  */}
                <div>  
                
                  <h3 style={contentStyle}>

                    <div className="site-card-wrapper">
                      <Row gutter={25}>
                        <Col span={5}>
                          <Card style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="200px" />}></Card>
                        </Col>

                        <Col span={8}>
                          <Card title="Just a little About me ."
                            bordered={false}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Card>


                        </Col>
                        <Col span={8}>
                          <Card title="Card title"
                            bordered={false}>Social Media: &nbsp;&nbsp;&nbsp;<a href="twitter.com"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="facebook.com"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} /></a>
                            <br />
                            Location:
                           <br />
                            <p>Email:<a href="mailto:someone@example.com">Send email</a></p>
                            {/* end of the devs profile */}
                          </Card>
                        </Col>
                      </Row>
                    </div>

                  </h3>


                </div>
                {/* end of the dev card */}
                <div>
                  <h3 style={contentStyle}> <div className="site-card-wrapper">
                    <Row gutter={25}>
                      <Col span={5}>
                        <Card style={{ width: 240 }}
                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="200px" />}
                        >
                        </Card>


                      </Col>
                      <Col span={8}>
                        <Card title="Just a little About me ."
                          bordered={false}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Card>


                      </Col>
                      <Col span={8}>
                        <Card title="Card title"
                          bordered={false}>Social Media: &nbsp;&nbsp;&nbsp;<a href="twitter.com"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="facebook.com"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} /></a>
                          <br />
                          Location:
                          <br />
                        </Card>
                      </Col>
                    </Row>
                  </div>
                  </h3>
                </div>
                
                <div>  
                
                  <h3 style={contentStyle}>

                    <div className="site-card-wrapper">
                      <Row gutter={25}>
                        <Col span={5}>
                          <Card style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="200px" />}></Card>
                        </Col>

                        <Col span={8}>
                          <Card title="Just a little About me ."
                            bordered={false}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Card>


                        </Col>
                        <Col span={8}>
                          <Card title="Card title"
                            bordered={false}>Social Media: &nbsp;&nbsp;&nbsp;<a href="twitter.com"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="facebook.com"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} /></a>
                            <br />
                            Location:
                           <br />
                            <p>Email:<a href="mailto:someone@example.com">Send email</a></p>
                            {/* end of the devs profile */}
                          </Card>
                        </Col>
                      </Row>
                    </div>

                  </h3>


                </div>
                <div>  
                
                <h3 style={contentStyle}>

                  <div className="site-card-wrapper">
                    <Row gutter={25}>
                      <Col span={5}>
                        <Card style={{ width: 240 }}
                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="200px" />}></Card>
                      </Col>

                      <Col span={8}>
                        <Card title="Just a little About me ."
                          bordered={false}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Card>


                      </Col>
                      <Col span={8}>
                        <Card title="Card title"
                          bordered={false}>Social Media: &nbsp;&nbsp;&nbsp;<a href="twitter.com"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="facebook.com"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} /></a>
                          <br />
                          Location:
                         <br />
                          <p>Email:<a href="mailto:someone@example.com">Send email</a></p>
                          {/* end of the devs profile */}
                        </Card>
                      </Col>
                    </Row>
                  </div>

                </h3>


              </div>
              </Carousel>

            </Footer>
          </Layout>
        </Layout>

        <BackTop>
      <div style={style}><UpOutlined /></div>
    </BackTop>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
