import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Networks from "./pages/networks/Networks";
import CreateNetwork from "./pages/networks/create/CreateNetwork";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import "./css/index.css"
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="networks">
            <Route index element={<Networks />} />
            <Route path="create" element={<CreateNetwork />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));