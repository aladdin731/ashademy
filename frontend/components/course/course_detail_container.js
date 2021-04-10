import {connect} from 'react-redux';
import {fetchCourse} from './../../actions/course_actions';
import CourseDetail from './course_detail';
import {selectCourseTagsNames, selectCourseInstructor} from "../../reducers/selectors";
import {createRequest} from '../../actions/request_actions';
import {fetchUser, fetchUsers} from '../../actions/user_actions';



const mapStateToProps = (state, {match}) => {
  // if we did not log in, the currentUser is null 
  const currentUser = state.session.currentUser;
  // 既然点进来的就说明course和courseId一定存在
  const courseId = parseInt(match.params.courseId);
  const course = state.entities.courses[courseId];
  // 如果没登录 instructor 是undefined
  const instructor =Object.keys(state.entities.users).length !== 0 ? state.entities.users[course.mentorId] : null ;
  const tags = selectCourseTagsNames(state);
  return {
    courseId, course, instructor, tags, currentUser
  }
}


const mapDispatchToProps = (dispatch) => ({
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
    createRequest: request => dispatch(createRequest(request)),
    fetchUser:(id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)