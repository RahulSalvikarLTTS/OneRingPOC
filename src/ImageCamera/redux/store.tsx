import { createStore } from "redux";
import { filePathReducer } from "./reducer";

const store = createStore(filePathReducer);

export default store;