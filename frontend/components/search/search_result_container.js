import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import SearchResult from './search_result';
import {fetchUser, fetchUsers} from '../../actions/user_actions';
import {fetchCourses, fetchCourse} from './../../actions/course_actions';
import {updateFilter} from './../../actions/filter_actions';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = state => {
  const courses = Object.values(state.entities.courses);
  const currentUser = state.session.currentUser;
  const ctype = state.ui.filters.ctype
  return {
    courses, currentUser, ctype 
  }
}

const mapDispatchToProps = dispatch => ({
   fetchUser:(id) => dispatch(fetchUser(id)),
   fetchUsers: () => dispatch(fetchUsers()),
   fetchCourses: () => dispatch(fetchCourses()),
   updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
   fetchCourse: id => dispatch(fetchCourse(id)),
   fetchReviews: () => dispatch(fetchReviews()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);