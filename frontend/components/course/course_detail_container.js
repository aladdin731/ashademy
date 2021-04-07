import {connect} from 'react-redux';
import {fetchCourse} from './../../actions/course_actions';
import CourseDetail from './course_detail';
import {selectCourseTagsNames, selectCourseInstructor} from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  const course = state.entities.courses[ownProps.match.params.courseId]
  const instructor = selectCourseInstructor(course, state);
  const tags = selectCourseTagsNames(state);
  return {
    course,
    tags,
    // instructor: Object.values(state.entities.users)[0].username
    instructor
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)