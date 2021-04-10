import { connect } from 'react-redux';
import {fetchCourse} from './../../actions/course_actions';

import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import {fetchUser, fetchUsers} from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  fetchUser: id => dispatch(fetchUser(id)),
  fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
