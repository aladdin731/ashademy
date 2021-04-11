import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import SearchResult from './search_result';
import {fetchUser, fetchUsers} from '../../actions/user_actions';
import {fetchCourses} from './../../actions/course_actions';

const mapStateToProps = state => ({
    courses: asArray(state.entities),
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
   fetchUser:(id) => dispatch(fetchUser(id)),
   fetchUsers: () => dispatch(fetchUsers()),
   fetchCourses: () => dispatch(fetchCourses()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);