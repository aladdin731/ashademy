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
      nextState[action.course.id] = action.course;
      return nextState;
    case REMOVE_COURSE:
      delete nextState[action.course.id]
      return nextState;
    case RECEIVE_REVIEW:
      nextState[action.review.courseId].reviewIds.push(action.review.id);
      return nextState;
    default:
      return state;
  }
}

export default courseReducer;