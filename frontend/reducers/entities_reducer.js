import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import courseReducer from './courses_reducer';
import tagsReducer from './tags_reducer';
import requestReducer from './requests_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  courses: courseReducer,
  tags: tagsReducer,
  requests: requestReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;