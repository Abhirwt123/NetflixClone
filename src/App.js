import React from "react";
import "./App.css";
import "./index.css";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Body from "./components/Body";

const App = () => {


  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
