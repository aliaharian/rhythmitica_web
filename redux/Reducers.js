import { combineReducers } from "redux";
import privateLessons from "./privateLessons";
import events from "./events";

export default combineReducers({
  privateLessons,
  events
});
