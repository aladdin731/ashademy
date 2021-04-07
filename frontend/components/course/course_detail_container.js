import {connect} from 'react-redux';
import {fetchCourse} from './../../actions/course_actions';
import CourseDetail from './course_detail';
import {selectCourseTagsNames, selectCourseInstructor} from "../../reducers/selectors";

const mapStateToProps = (state, {match}) => {
  const courseId = parseInt(match.params.courseId);
  const course = state.entities.courses[courseId] || {};
  const instructor = state.entities.users[course.mentorId];
  const tags = selectCourseTagsNames(state);
  return {
    courseId, course, instructor, tags
  }
}


const mapDispatchToProps = (dispatch) => ({
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)) 
})


export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)