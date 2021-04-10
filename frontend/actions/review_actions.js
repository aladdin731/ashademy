import * as ReviewAPI from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = ({ review, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  author,
});

export const createReview = review => dispatch => (
  ReviewAPI.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

