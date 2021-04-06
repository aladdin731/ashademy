import {RECEIVE_COURSE_ERRORS, RECEIVE_COURSE} from './../actions/course_actions';
  
  const courseErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_COURSE_ERRORS:
        return action.errors;
      case RECEIVE_COURSE:
        return [];
      default:
        return state;
    }
  };
  
  export default courseErrorReducer;