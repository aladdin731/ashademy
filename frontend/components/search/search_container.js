import { connect } from 'react-redux';
import {fetchCourses} from './../../actions/course_actions';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';
import { fetchReviews } from '../../actions/review_actions';
import {fetchRequests} from '../../actions/request_actions';
import {fetchUsers} from '../../actions/user_actions'

const mapStateToProps = state => ({
  ctype: state.ui.filters.ctype,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchCourses: (data) => dispatch(fetchCourses(data)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchRequests: () => dispatch(fetchRequests()),
  fetchReviews:() => dispatch(fetchReviews)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
