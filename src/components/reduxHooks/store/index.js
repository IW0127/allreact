import { createStore } from "redex";

const reducerFn = (state = { counter: 0 }, action) => {};
const store = createStore(reducerFn);
export default store;
