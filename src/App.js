import React from "react";
import { Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
<<<<<<< HEAD
import Registration from './pages/Registration';
=======
import RegistrationForm from "./components/registrationForm/RegistrationForm";
import Messages from "./pages/Messages"
>>>>>>> lesa-branch

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
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
<<<<<<< HEAD
          path="/registration"
          component={Registration}
        />
=======
          path="/registrationForm"
          component={RegistrationForm}
        />

        <Route
          exact
          path="/messagefeed"
          component={Messages}
        />

>>>>>>> lesa-branch
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    );
  }
}

export default App;
