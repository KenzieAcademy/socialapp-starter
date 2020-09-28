import React from "react";


import { Layout, Carousel, Card, Col, Row, BackTop, Header, Sider, Content } from 'antd';
import { createFromIconfontCN, UpOutlined } from '@ant-design/icons';








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
            background: '#e0d8c0',
           
            
           
        };











        return (
            <div>

                <Footer style={{ textAlign: 'center' }} className="footboy"><em><b> Designed Using Ant  ©2018 by Klinesettes</b></em>


                    {/* take to make one for yourself */}

                    <Carousel autoplay autoplaySpeed="45sec">
                        {/* start of the dev card  */}
                        <div>
                            <h3 style={contentStyle}>


                                <div className="site-card-wrapper">
                                    <Row gutter={10}>
                                        <Col span={3}>
                                            <Card style={{ width:200 }}
                                                cover={<img alt="example" 
                                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
                                                height="200px" />}>

                                          </Card>      
                                        </Col>

                                        <Col span={8}>
                                            <Card title="Just a little About me ."
                                            bordered=
                                            {false}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Card>


                                        </Col>
                                        <Col span={8}>
                                            <Card title="Card title"
                                                bordered={false}>Social Media: &nbsp;&nbsp;&nbsp;<a href="twitter.com"><IconFont type="icon-twitter" style={{ fontSize: '40px', color: '#067c89' }} /> &nbsp;&nbsp;&nbsp;&nbsp;</a><a href="facebook.com"><IconFont type="icon-facebook" style={{ fontSize: '40px', color: 'blue' }} /></a>
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






                    </Carousel>

                </Footer>
            </div>
        );
    }
}

export default Footer;


















