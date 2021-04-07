import {connect} from 'react-redux';
import {fetchCourses} from './../../actions/course_actions';
import CourseIndex from './course_index';
import {fetchUsers} from '../../actions/user_actions';


const mapStateToProps = state => ({
  // courses: selectAllCourses(state),
  courses: Object.values(state.entities.courses)
})

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
  fetchUsers:() => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseIndex)