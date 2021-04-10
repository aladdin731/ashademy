
import {RECEIVE_COURSE} from '../actions/course_actions';
import {RECEIVE_REVIEW} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COURSE:
      return Object.assign({}, state, action.payload.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return Object.assign({}, state, { [review.id]: review });
    default:
      return state;
  }
}

export default reviewsReducer;
