import {connect} from 'react-redux';
import {fetchCourses, fetchCourse} from './../../actions/course_actions';
import CourseIndex from './course_index';
import {fetchUsers} from '../../actions/user_actions';
import {fetchRequests} from '../../actions/request_actions';


const mapStateToProps = state => ({
  // courses: selectAllCourses(state),
  courses: Object.values(state.entities.courses)
})

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
  // fetchCourse: id => dispatch(fetchCourse(id)),
  // fetchUsers:() => dispatch(fetchUsers()),
  // fetchRequests: () => dispatch(fetchRequests())

})

export default connect(mapStateToProps, mapDispatchToProps)(CourseIndex)