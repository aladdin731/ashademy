import { RECEIVE_REQUEST, RECEIVE_REQUESTS} from '../actions/request_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {REMOVE_COURSE, RECEIVE_COURSE} from '../actions/course_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const requestReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type){
    case RECEIVE_REQUESTS:
      return action.requests;
    case RECEIVE_REQUEST:
      nextState[action.payload.request.id] = action.payload.request;
      return nextState;
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.requests, action.payload.receivedRequests);
    case RECEIVE_COURSE:
      return Object.assign({}, state, action.payload.receivedRequests);
    // case REMOVE_COURSE:
    //   let keys = Object.keys(nextState);
    //   for(let i = 0; i < keys.length; i++) {
    //     if(nextState[keys[i]].courseId === action.courseId) {
    //       delete nextState[keys[i]]
    //     }
    //   }
    //   return nextState;
    case REMOVE_COURSE:
      let keys = Object.keys(nextState);
      for(let i = 0; i < keys.length; i++) {
        if(nextState[keys[i]].courseId === action.payload.course.id) {
          delete nextState[keys[i]]
        }
      }
      return nextState;
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.currentUser.requests, action.currentUser.receivedRequests);
    default:
      return state;
  }
}

export default requestReducer;