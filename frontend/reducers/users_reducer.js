import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    // 之后可能根据需要改进
    case RECEIVE_USER:
      nextState = {[action.user.id]: action.user};
      return nextState;
    // case RECEIVE_CURRENT_USER:
    //   nextState[action.currentUser.id] = action.currentUser;
    //   return nextState;
    default:
      return state;
  }
};

export default usersReducer;