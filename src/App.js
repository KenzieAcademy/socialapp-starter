import React from "react";
import { Switch, Route } from "react-router-dom";
import MainHub from "./pages/MainHub";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
<<<<<<< HEAD
          path="/profile/:username"
          render={(props) => (
            <Profile {...props} name={props.match.params.name} />
          )}
=======
          path="/" 
          component={Home} 
        />
        <Route 
          exact 
          path="/profile/:username" 
          component={Profile}
        />
        <Route 
          exact 
          path="/mainHub" 
          component = {MainHub} 
        />
        <Route 
          exact 
          path="*" 
          component={NotFound} 
>>>>>>> 16ff154db3c00495a2ab511025d2db6dd0eeb06e
        />
        <Route exact path="/mainHub" component={MainHub} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
