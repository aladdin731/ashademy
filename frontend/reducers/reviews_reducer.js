
import {RECEIVE_COURSE} from '../actions/course_actions';
import {RECEIVE_REVIEW} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COURSE:
      // nextState = action.payload.reviews;
      // return nextState;
      return Object.assign({}, state, action.payload.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return Object.assign({}, state, { [review.id]: review });
    default:
      return state;
  }
}

export default reviewsReducer;
