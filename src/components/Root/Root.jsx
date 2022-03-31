import React from "react";
import { Provider } from "react-redux";

import SortingVisualizer from "../SortingVisualizer/sortingVisualizer";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <SortingVisualizer />
    </Provider>
  );
};

export default Root;
