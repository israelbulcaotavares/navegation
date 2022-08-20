import React from "react";
import Content from "../components/layouts/Content";
import Menu from "../components/layouts/Menu";

import { BrowserRouter } from "react-router-dom"; // essa importação mudou

import "./App.css";
const App = (props) => (
  <div className="App">
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
  </div>
);

export default App;
