import {connect} from 'react-redux';
import {fetchCourse} from './../../actions/course_actions';
import CourseDetail from './course_detail';
import {selectCourseTagsNames, selectCourseInstructor} from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    course: state.entities.courses[ownProps.match.params.courseId],
    tags: selectCourseTagsNames(state),
    // instructor: Object.values(state.entities.users)[0].username
    instructor: selectCourseInstructor(state)
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)