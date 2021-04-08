import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_COURSE, REMOVE_COURSE} from '../actions/course_actions';
import {RECEIVE_REQUEST} from '../actions/request_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.user.id]: action.currentUser.user });
    case RECEIVE_USERS:
      return Object.assign({}, action.users, state);
    case RECEIVE_USER:
      nextState[action.payload.user.id] = action.payload.user;
      return nextState;
    case RECEIVE_COURSE:
      nextState[action.payload.instructor.id] = action.payload.instructor;
      return nextState;
    case REMOVE_COURSE:
      let arr = Object.values(nextState)[0].courseIds;
      // specific number to delete
      arr.splice(arr.indexOf(action.courseId), 1);
      return nextState;
    case RECEIVE_REQUEST:
      nextState[action.payload.sender.id] = action.payload.sender;
      nextState[action.payload.receiver.id] = action.payload.receiver;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;