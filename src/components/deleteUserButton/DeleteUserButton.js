import React from "react";
import DataService from "../../DataService";
import { Popconfirm } from 'antd';


class DeleteUserButton extends React.Component {
  constructor() {
    super();

    this.client = new DataService()
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.client.deleteUser(this.state).then((result) => {
      console.log(result.data);
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
      <button onClick={this.handleDelete} className="DeleteUserButton">Delete</button>;
  </Popconfirm>
    
    

  }
}

export default DeleteUserButton;


