import {RECEIVE_COURSE_ERRORS} from './../actions/course_actions';
  
  const courseErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_COURSE_ERRORS:
        return action.errors;
      default:
        return state;
    }
  };
  
  export default courseErrorReducer;