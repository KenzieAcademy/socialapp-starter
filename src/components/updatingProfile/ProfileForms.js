import React from "react"
import { Form, Input, Button } from 'antd';
import QuestboardService from "../servicesPage/ServicePage"

const Questboard = new QuestboardService()

class ProfileForms extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:`https://socialapp-api.herokuapp.com/users/${Questboard.getUsername()}`,
            about: "",
            password: ""
        }
    }

render () {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
    
  const onFinish = values => {
    console.log('Success:', values);
    };
    
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }
  // const handleUserName = () => {
  //   const name = (event.target)
  //   FormData.append()
  //   this.setState({formData})
  // }
  // const handleNameUpdate = () => {
  //   Questboard.UpdateUser(this.state.formData)
  // }
  
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        // onChange={}
        rules={[{ required: true, message: 'Please input your display name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your character!' }]}
      >
        <Input.Password />
      </Form.Item>
<Form.Item>
       <Button type="primary" htmlType="submit" 
      //  onClick={}
      >
          Submit
        </Button>
      </Form.Item>
    </Form>
   
    );
};
}


export default ProfileForms