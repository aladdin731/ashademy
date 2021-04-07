import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_COURSE} from '../actions/course_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    // 之后可能根据需要改进
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.user.id]: action.currentUser.user });
    case RECEIVE_USERS:
      return Object.assign({}, action.users, state);
    case RECEIVE_USER:
      nextState[action.payload.user.id] = action.payload.user;
      return nextState;
    case RECEIVE_COURSE:
      nextState[action.payload.instructor.id] = action.payload.instructor;
      // nextState[action.payload.course.mentor_id].courseIds.push(action.payload.course.id);
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;