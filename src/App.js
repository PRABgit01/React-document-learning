import { Route, Routes } from "react-router-dom";
import { IntractiveUi } from "./addingintration/intraction";
import { UseEffectexample } from "./hooks/UseEffectExample";
import { UseStateHooks } from "./hooks/UseStateHooks";
import { UseStateHooksDoc } from "./hooks/hooksfromDOc/useStatehookdoc";
import { UseStateWorking } from "./hooks/useState$setstate";
import { DataShow } from "./learn/conditionalrendring";
import { Filtering } from "./redringlist/filteringexample";
import { Mapuse } from "./redringlist/mapfeature";

import "./stylingcomponent/App.css";
import { HomePage } from "./componentsPage/HomePage";
// import { AboutPage } from "./componentsPage/AboutPage";
import { DontExist } from "./componentsPage/DontExist";
import { NavBarPage } from "./componentsPage/Navbard";
import Dangerzone from "./componentsPage/dangerzone";
import Product from "./componentsPage/product/product";
import Feature from "./componentsPage/product/feature";
import New from "./componentsPage/product/new";
import Users from "./componentsPage/user/users";
import UsersDetails from "./componentsPage/user/usersDetails";
import Admin from "./componentsPage/user/Admin";
import React from "react";

export default function PackingList2() {
  const LazyAbout=React.lazy(()=>import('./componentsPage/AboutPage'))
  return (
    <>
      {/* <DataShow /> */}
      {/* <Mapuse /> */}
      {/* <Filtering/> */}
      {/* <IntractiveUi/> */}
      {/* <UseStateHooks/> */}
      {/* <UseStateWorking/> */}
      {/* <UseEffectexample/> */}
      {/* <UseStateHooksDoc/> */}

      <NavBarPage />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<><React.Suspense fallback="loading..."/><LazyAbout /></>}></Route>
        <Route path="dontexist" element={<DontExist />}></Route>
        <Route path="product" element={<Product />}>
          <Route index element={<New />} />
          <Route path="feature" element={<Feature />}></Route>
          <Route path="new" element={<New />}></Route>
        </Route>
        <Route path="user" element={<Users />}>
          <Route path="admin" element={<Admin />}></Route>
          <Route path=":userID" element={<UsersDetails />}></Route>
        </Route>
        <Route path="*" element={<Dangerzone />}></Route> {/*no match*/}
      </Routes>
    </>
  );
}
