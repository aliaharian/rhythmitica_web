import { combineReducers } from "redux";
import privateLessons from "./privateLessons";
import events from "./events";
import posts from "./posts";
import users from "./users";

export default combineReducers({
  privateLessons,
  events,
  posts,
  users
});
