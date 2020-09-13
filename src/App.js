import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
// import FootNavBar from "./components/footNavBar/FootNavBar";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="*" component={NotFound} />
        {/* <Router>
          <Link to="https://nasa.gov/">{FootNavBar}</Link>
        </Router> */}
      </Switch>
    );
  }
}

export default App;
