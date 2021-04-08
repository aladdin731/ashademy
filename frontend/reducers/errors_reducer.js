import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import userErrorsReducer from './user_errors_reducer';
import courseErrorReducer from './course_errors_reducer'
import requestErrorReducer from './requests_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  users: userErrorsReducer,
  courses: courseErrorReducer,
  requests: requestErrorReducer
});


export default errorsReducer;