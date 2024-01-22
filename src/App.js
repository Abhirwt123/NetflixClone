import React from "react";
import "./App.css";
import "./index.css";
// import { createBrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import SignUp from "./components/SignUp"
// import Browser from "./components/Browser";
// import Body from "./components/Body";
// import SignUp from "./components/SignUp";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Body from "./components/Body";

const App = () => {


  return (
    <Provider store={appStore}>
      <Body/>
      </Provider>
  );
};

export default App;
