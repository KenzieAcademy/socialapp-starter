import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import Visit from "./pages/visit/Visit";
import Style from "./pages/style/Style";
import Play from "./pages/play/Play";
import Meet from "./pages/meet/Meet";
import Logoff from "./pages/logoff/Logoff";
import NotFound from "./pages/notFound/NotFound";
import CommentForm from "./components/commentForm/CommentForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/commentForm" component={CommentForm} />
          
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/about" component={About} />
          <Route exact path="/visit" component={Visit} />
          <Route exact path="/style" component={Style} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/meet" component={Meet} />
          <Route exact path="/logoff" component={Logoff} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

// import Menu from "./components/menu/Menu";
// import { Buttons } from "./components/button/Button";
// import { Containers } from "./Containers";
// import { Lists } from "./Lists";
