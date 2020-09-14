
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='Sign Up'
          active={activeItem === 'signUp'}
          onClick={this.handleItemClick}
        >
          Sign Up
        </Menu.Item>

        <Menu.Item
          name='Login'
          active={activeItem === 'Login'}
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>

        
      </Menu>
    )
  }
}
