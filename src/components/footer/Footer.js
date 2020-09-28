import React from "react";
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";

import { Layout, Carousel, Card, Col, Row} from 'antd';
import {createFromIconfontCN,} from '@ant-design/icons';
    
  






class Footer extends React.Component {








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
            <div>

                <Footer style={{ textAlign: 'center' }} ><em><b> Designed Using Ant  ©2018 by Klinesettes</b></em>


                    {/*  */}

                    <Carousel autoplay autoplaySpeed="15">
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
            </div>
        );
    }
}

export default Footer;


















