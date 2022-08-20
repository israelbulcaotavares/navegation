import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // para navegações

import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from "../../views/examples/Param";
import NoutFound from "../../views/examples/Examples";

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="/" exact element={<Home />} />
      
      <Route path="*" exact element={<NoutFound />} />

    </Routes>
  </main>
);

export default Content;
