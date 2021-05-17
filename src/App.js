import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/component";

const App = () => {
  return (
    // Routers
    <Router>
      {/* Main Container */}
      <div className="container">
        {/* Route the component Home */}

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
