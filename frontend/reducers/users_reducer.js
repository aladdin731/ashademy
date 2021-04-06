import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    // 之后可能根据需要改进
    case RECEIVE_USERS:
      //console.log("action", action);
      // return action.users;
      return Object.assign({}, action.users, state);
    case RECEIVE_USER:
      return {[action.payload.user.id]: action.payload.user};
    default:
      return state;
  }
};

export default usersReducer;