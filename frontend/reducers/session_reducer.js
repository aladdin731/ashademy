import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import 
{RECEIVE_ALL_COURSES} from '../actions/course_actions'
const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser.user };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    // case RECEIVE_ALL_COURSES:
    //   return { currentUser: action.currentUser.user };
    case REMOVE_COURSE:
      nextState = Object.assign({}, state);
      let userId = action.payload.instructor.id;
      let arr1 = nextState[userId].courseIds;
      arr1.splice(arr1.indexOf(action.payload.course.id), 1);
      let arr2 = nextState[userId].receivedRequestsids;
      let ids = action.payload.course.receivedRequestsids;
      for(let i = 0; i < ids.length;i++) {
        arr2.splice(arr2.indexOf(ids[i]), 1);
      }
    return nextState;
    default:
      return state;
  }
};

export default sessionReducer;