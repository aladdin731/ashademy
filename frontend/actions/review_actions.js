import * as ReviewAPI from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author,
});

export const createReview = review => dispatch => (
  ReviewAPI.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

