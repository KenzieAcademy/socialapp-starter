import React from "react";
import DataService from "../../DataService";
import { Popconfirm } from "antd";

class DeleteUserButton extends React.Component {
  constructor(props) {
    super(props)
    let loginData = JSON.parse(localStorage.getItem("login"));
    
    this.state = {
      username: loginData.result.username,
      isSubmitted: false,
    }
    this.client = new DataService()

  }
handleLoginRemoval = (e) => {
  window.localStorage.removeItem('login')

}

  handleDelete = (e) => {
    e.preventDefault();
    this.client.deleteUser(this.state.username).then((result) => {
      console.log(result);
      this.setState ({isSubmitted: true})
    })
    

    window.location.reload()
  };

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  render() {
    if (this.state.isSubmitted) {
      return (
        <button onClick={this.handleLoginRemoval}>
          Login Page
        </button>
      )
    }
    return (
      <Popconfirm
        title="Are you sure？"
        okText="Yes"
        cancelText="No"
        onConfirm={this.handleDelete}
      >
        <button className="DeleteUserButton">Delete</button>
      </Popconfirm>
    );
  }
}

export default DeleteUserButton;
