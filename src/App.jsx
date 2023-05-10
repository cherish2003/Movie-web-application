import React from "react";
import Home from "./Pages/Home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Content } from "./Pages/Content/Content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Content" element={<Content />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
