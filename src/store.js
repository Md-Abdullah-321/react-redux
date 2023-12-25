import { createStore } from "redux";
import counterReducer from "./services/Reducers/CounterReducers";

const store = createStore(counterReducer);

export default store;