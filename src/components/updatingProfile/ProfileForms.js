import React from "react"
import { Form, Input, Button } from 'antd';
import QuestboardService from "../servicesPage/ServicePage"

class ProfileForms extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            displayName:"",
            about: "",
            // password:""
        } 
        this.Questboard = new QuestboardService()
    
      }
        handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
       handleNameUpdate = () => {
        console.log(this.state)
        this.Questboard.UpdateUser(this.state).then(response => (console.log(response)))
      }
      
render () {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
      
  const onFinish = values => {
    console.log('Success:', values);
    };
    
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }
  
  
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <form>
        <input 
        placeholder="Input your name here!"
        label="displayName"
        name="displayName"
        onChange={this.handleChange}
        />
      </form>
      <form>
        <input 
        placeholder="Tell us about you!"
        label="about"
        name="about"
        onChange={this.handleChange}
       />
      </form>
      {/* <form>
      <input 
      label="password"
      name="password"
      onchange={this.handleChange}
      rules={[{required: true, message: 'Please update your password!'}]} />
      </form> */}
<form>
       <button type="primary" htmlType="submit" 
        onClick={this.handleNameUpdate}
      >
          Submit
        </button>
      </form>
    </Form>
   
    );
};
}


export default ProfileForms