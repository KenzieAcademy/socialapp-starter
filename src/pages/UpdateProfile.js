import React from "react";
import {Image, Avatar, message, Upload, Button, Layout, Form, InputNumber, Result} from 'antd';
import "antd/dist/antd.css"
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import Menu from "../components/menu/MenuAuthenticated";
import QuestboardService from "../pages/ServicePage"
import { userIsAuthenticated } from "../redux/HOCs";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}


class Profile extends React.Component {
  constructor(props) {
  super(props) 
    this.state = {
      loading:false,
      username: [],
      picture: null,
    }
    this.client = new QuestboardService()
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  
  handleSubmit = event => {
    event.preventDefault();
    this.client.SetPicture(this.state.picture).then(result =>
      {console.log(result)})
    
      }

  
  render() {
    const { Header, Content, Footer} = Layout;
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Layout className="site-layout" style={{ marginLeft: 190 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="Profile">
      <Menu isAuthenticated={this.props.isAuthenticated} />
       <h2>Update your character sheet!</h2>
       
       
      <Upload
        name="avatar"
        size="large"
        listType="picture-card"
        className="avatarUpload"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      <Button 
         type="primary" 
         className="submitButton" 
         onClick={this.handleSubmit}> Save picture
      </Button>
        </div>
        </div>
    
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    
   
    );
  }
}
export default userIsAuthenticated(Profile)
