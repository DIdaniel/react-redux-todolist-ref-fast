import { createStore } from "redux";
import index from "../reducer/index";

export const store = createStore(
  index,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
