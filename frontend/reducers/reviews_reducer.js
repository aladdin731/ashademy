

import {RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';


const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    default:
      return state;
  }
}

export default reviewsReducer;
