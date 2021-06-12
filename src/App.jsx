import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Products } from "./components";

const App = () => {
  return (
    <div className=" font-roboto">
      <Router>
        <Switch>
          <Route path="/" exact component={Products} />
        </Switch>
      </Router>
      {/* <h1 className=" text-6.5xl">Simple Boilerplate React Context Hooks</h1>
      <TodoContainer /> */}
    </div>
  );
};

export default App;
