import {connect} from 'react-redux';
import {fetchCourse} from './../../actions/course_actions';
import CourseDetail from './course_detail';
import {selectCourseTagsNames, selectCourseInstructor} from "../../reducers/selectors";
import {createRequest} from '../../actions/request_actions';
import {fetchUser} from '../../actions/user_actions';


const mapStateToProps = (state, {match}) => {
  const currentUser = state.session.currentUser;
  const courseId = parseInt(match.params.courseId);
  const course = state.entities.courses[courseId] || {};
  const instructor = state.entities.users[course.mentorId];
  const tags = selectCourseTagsNames(state);
  return {
    courseId, course, instructor, tags, currentUser
  }
}


const mapDispatchToProps = (dispatch) => ({
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
    createRequest: request => dispatch(createRequest(request)),
    fetchUser:(id) => dispatch(fetchUser(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)