import { RECEIVE_REQUEST, RECEIVE_REQUESTS} from '../actions/request_actions';
import {RECEIVE_USER} from '../actions/user_actions';

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
    default:
      return state;
  }
}

export default requestReducer;