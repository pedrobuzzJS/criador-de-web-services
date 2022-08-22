import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid } from "./components/DataGrid/Grid";
import { FormBuilder } from "./components/Form/FormBuilder/FormBuilder";
import { SideBar } from "./components/SideBar/SideBar";
import { Login } from "./pages/Login/login";
import { PageA } from "./pages/PageA/pageA";
import { PageB } from "./pages/PageB/pageB";
import { PageNotFound } from "./pages/PageNotFound/pageNotFound";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="pagea" element={<PageA />} />
          <Route path="pageb" element={<PageB />} />
          <Route path="login" element={<Login />} />
          <Route path="grd" element={<Grid />} />
          <Route path="formc" element={<FormBuilder ss={''} />} />
          <Route path={"*"} element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;