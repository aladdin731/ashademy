import {connect} from 'react-redux';
import {fetchCourses} from './../../actions/course_actions';
import {selectAllCourses} from './../../reducers/selectors';
import CourseIndex from './course_index';


const mapStateToProps = state => ({
  courses: selectAllCourses(state),
})

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses())
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseIndex)