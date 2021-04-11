import { RECEIVE_ALL_COURSES, RECEIVE_COURSE, REMOVE_COURSE} from '../actions/course_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_REQUEST} from '../actions/request_actions';
import {RECEIVE_REVIEW} from '../actions/review_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'

const courseReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type){
    case RECEIVE_ALL_COURSES:
      return action.courses;
    case RECEIVE_COURSE:
      nextState[action.payload.course.id] = action.payload.course;
      return nextState;
    case REMOVE_COURSE:
      delete nextState[action.courseId]
      return nextState;
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.courses, action.payload.requestedCourses);
    case RECEIVE_REQUEST:
      nextState[action.payload.course.id] = action.payload.course;
      return nextState;
    // case RECEIVE_CURRENT_USER:
    //   return Object.assign({}, state, action.currentUser.courses);
    default:
      return state;
  }
}

export default courseReducer;