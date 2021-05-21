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
      nextState[action.request.id] = action.request;
      return nextState;
    case REMOVE_COURSE:
      let removeIds = action.course.requestIds;
      for(let i = 0; i < removeIds.length; i++) {
        delete nextState[removeIds[i]]
      }
      return nextState;
    default:
      return state;
  }
}

export default requestReducer;