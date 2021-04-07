import {connect} from 'react-redux';
import {fetchCourses} from './../../actions/course_actions';
import CourseIndex from './course_index';


const mapStateToProps = state => ({
  // courses: selectAllCourses(state),
  courses: Object.values(state.entities.courses)
})

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses())
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseIndex)