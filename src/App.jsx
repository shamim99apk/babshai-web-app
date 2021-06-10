import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className=" font-roboto">
      <Router>
        <Navbar />
      </Router>
      {/* <h1 className=" text-6.5xl">Simple Boilerplate React Context Hooks</h1>
      <TodoContainer /> */}
    </div>
  );
};

export default App;
