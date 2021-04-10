import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_COURSE, REMOVE_COURSE} from '../actions/course_actions';
import {RECEIVE_REQUEST} from '../actions/request_actions';
import {RECEIVE_REVIEW} from '../actions/review_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  // let nextState = Object.assign({}, state);
  let nextState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.user.id]: action.currentUser.user });
    case RECEIVE_USERS:
      return Object.assign({}, action.users, state);
    case RECEIVE_USER:
      nextState = Object.assign({}, state);
      nextState[action.payload.user.id] = action.payload.user;
      return nextState;
    case RECEIVE_COURSE:
      nextState = Object.assign({}, state);
      nextState[action.payload.instructor.id] = action.payload.instructor;
      return nextState;
    case REMOVE_COURSE:
      nextState = Object.assign({}, state);
      let arr1 = Object.values(nextState)[0].courseIds;
      arr1.splice(arr1.indexOf(action.payload.course.id), 1);
      let arr2 = Object.values(nextState)[0].receivedRequestsids;
      let ids = action.payload.course.receivedRequestsids;
      for(let i = 0; i < ids.length;i++) {
        arr2.splice(arr2.indexOf(ids[i]), 1);
      }
      return nextState;
    case RECEIVE_REQUEST:
      nextState = Object.assign({}, state);
      nextState[action.payload.sender.id] = action.payload.sender;
      nextState[action.payload.receiver.id] = action.payload.receiver;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;