import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div className=" font-roboto">
      <Router>
        <Navbar />
        <Footer />
      </Router>
      {/* <h1 className=" text-6.5xl">Simple Boilerplate React Context Hooks</h1>
      <TodoContainer /> */}
    </div>
  );
};

export default App;
