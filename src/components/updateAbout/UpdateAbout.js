import React from "react";
import DataService from "../../DataService";
import { Card, Form, Input, Button } from 'antd';

const FormItem = Form.item;
// const formItemLayout =
//     formLayout === 'horizontal'
//       ? {
//           labelCol: { span: 4 },
//           wrapperCol: { span: 14 },
//         }

class UpdateAbout extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService()
    this.state = {
      isSubmitted:false,
      userData: {
      userName: "",
      displayName: "",
      about: "",
    
      },
      statusCode: 0
    }
    
  }

  handleChange = (event)=>{
    const {userData} = {...this.state};
    userData[event.target.name]=event.target.value;
    this.setstate({
      userData
    })
  }
  handleSubmit = (event)=>{
    let about ={}
    let loginData = JSON.parse(localStorage.getItem("login"))
    this.client.updateAbout(loginData.result.userName ).then(res => console.log(res.data.user.username))
    event.preventDefault();
    this.setState({
      submitted : true
   
   });
  
   this.setState({
    userData:{
    userName:"",
        displayName:"",
     about:"",
    }
  });

}
  componentDidMount(){

  }

  
  

  render() {
    return (
      <div className="UpdateAbout">
        <Card style={{ textAlign: "left", width: "50%", margin: "left" }}>
        <form id="updateAbout-form"
        // {...formItemLayout}
        // layout={formLayout} 
        onSubmit = {this.handleSubmit}>
          
          <Form.Item>
          <label htmlFor="userName">User Name:    </label>
          <input type="text" name="userName" 
          value = {this.state.userData.userName}
          onChange = {this.handleChange}
           />
          </Form.Item>
          <Form.Item>
          
          <label htmlFor="displayName">Display Name:  </label>
          <input type="text" name="displayName" 
          value = {this.state.userData.displayName}
          onChange = {this.handleChange}
           />
           </Form.Item>

           <Form.Item>
          <label htmlFor="about">About:  </label>
          <input type="text" name="about" 
          value = {this.state.userData.about}
          onChange = {this.handleChange}
           />
           </Form.Item>
           <Form.Item>
          <button type="submit">Update Profile</button>
          </Form.Item>
        </form>
        </Card>
        
      </div>
    );
  }
}

export default UpdateAbout;
