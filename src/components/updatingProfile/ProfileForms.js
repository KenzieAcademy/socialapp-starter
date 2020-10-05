import React from "react"
import { Form } from 'antd';
import QuestboardService from "../servicesPage/ServicePage"

class ProfileForms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
      about: "",
      displayName: ""
    }
    this.Questboard = new QuestboardService()

  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleNameUpdate = (event) => {
    event.preventDefault()
    this.Questboard.UpdateUser(this.state).then(response => (console.log(response)))
  }

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    // componentDidMount() {
    //   new QuestboardService().Users().then(response => {
    //     this.setState({})
    //   })


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
        <input
          placeholder="Input your name here!"
          label="displayName"
          name="displayName"
          onChange={this.handleChange}
        />
        <input
          placeholder="Tell us about you!"
          label="about"
          name="about"
          onChange={this.handleChange}
        />
        <input
          label="password"
          name="password"
          type="password"
          onChange={this.handleChange}
        />

        <button type="submit" onClick={this.handleNameUpdate}>
          Submit
        </button>

      </Form>

    );
  };
}


export default ProfileForms