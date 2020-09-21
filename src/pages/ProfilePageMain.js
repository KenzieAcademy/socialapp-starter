import React from "react";

import { userIsAuthenticated } from "../redux/HOCs";
import Menu from '../components/menu/Menu'
import { withRouter } from 'react-router-dom'
import { Input, Button  } from 'semantic-ui-react'






class ProfilePageMain extends React.Component {
  constructor(props) {
    super(props);

    
    
  }

  
  
  
  
  





  
  render() {
    
    return (
      <>
       <Menu isAuthenticated={this.props.isAuthenticated}/>
      
      </>
      
    )
    
  }
  
}


export default userIsAuthenticated(ProfilePageMain);
