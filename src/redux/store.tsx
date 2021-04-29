import { createStore } from "../../node_modules/redux/index";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer)

export default store


