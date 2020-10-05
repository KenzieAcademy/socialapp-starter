import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Messages from "./pages/Message";
import Profile from "./pages/Profile";
import ProfilePageMain from "./pages/ProfilePageMain";
import { PlaceholderParagraph } from "semantic-ui-react";


class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      userName:''
    }
    
    const currentUser = JSON.parse(localStorage.getItem("login"));
    this.setState({userName:currentUser.result.username})
    console.log(currentUser.result.username)

    
  }
  
  render() {
    
    return (
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Profile/:username" component={Profile} />
        <Route exact path="/Message" component={Messages} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
