import { Provider } from "react-redux";
import store from "./store/index";
import React from "react";

function ReduxHooks() {
  return (
    <Provider store={store}>
      <ReduxHooks />
    </Provider>
  );
}

export default ReduxHooks;
