import { BrowserRouter, Routes, Route } from "react-router-dom";

import Configure from "./Configure";
import See from "../components/See";
import Head from "../components/Head";
import { FunctionComponent } from "react";

const Root: FunctionComponent = () => {
  return (
    <BrowserRouter basename="/">
      <Head />
      <Routes>
        <Route path="/see" element={<See />} />
        <Route path="/configure" element={<Configure />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
