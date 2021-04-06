import { RECEIVE_ALL_COURSES, RECEIVE_COURSE, REMOVE_COURSE} from '../actions/course_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const courseReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type){
    case RECEIVE_ALL_COURSES:
      return Object.assign({}, action.courses, state);
    case RECEIVE_COURSE:
      nextState[action.payload.course.id] = action.payload.course;
      return nextState;
    case REMOVE_COURSE:
        delete nextState[action.courseId]
        return nextState;
    case RECEIVE_USER:
        return action.payload.courses;
    default:
      return state;
  }
}

export default courseReducer;