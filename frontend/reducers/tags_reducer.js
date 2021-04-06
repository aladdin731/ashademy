import {RECEIVE_COURSE} from './../actions/course_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_COURSE:
      nextState = action.payload.tags;
      return nextState;
    default:
      return state;
  }
}

export default tagsReducer;