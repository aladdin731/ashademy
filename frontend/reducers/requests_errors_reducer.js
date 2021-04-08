import {RECEIVE_REQUEST, RECEIVE_REQUEST_ERRORS} from './../actions/request_actions';
  
  const requestErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_REQUEST_ERRORS:
        return action.errors;
      case RECEIVE_REQUEST:
        return [];
      default:
        return state;
    }
  };
  
  export default requestErrorReducer;