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
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USERS:
      return Object.assign({}, action.users, state);
    case RECEIVE_USER:
      nextState = Object.assign({}, state);
      nextState[action.user.id] = action.user;
      return nextState;
    case RECEIVE_COURSE:
      nextState = Object.assign({}, state);
      nextState[action.course.mentorId].courseIds.push(action.course.id);
      return nextState;
    case REMOVE_COURSE:
      nextState = Object.assign({}, state);
      let userId = action.course.mentorId;
      let arr1 = nextState[userId].courseIds;
      arr1.splice(arr1.indexOf(action.course.id), 1);
      let arr2 = nextState[userId].receivedRequestsids;
      let arr3 = Object.values(nextState[userId].receivedRequests);
      for(let i = 0; i < arr3.length; i++) {
        if(arr3[i].courseId === action.course.id) {
          arr2.splice(arr2.indexOf(arr3[i].id), 1);
        }
      }
      return nextState;
    case RECEIVE_REQUEST:
      nextState = Object.assign({}, state);
      let requestId = action.request.id;
      let requestArr = nextState[action.request.menteeId].requestIds;
      let receivedRequestArr = nextState[action.request.receiver.id].receivedRequestsids;
      if(!requestArr.includes(requestId)) {
        requestArr.push(requestIds)
      }
      if(!receivedRequestArr.includes(requestId)) {
        receivedRequestArr.push(requestId)
      }
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;