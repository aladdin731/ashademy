import {connect} from 'react-redux';
import {fetchCourse} from './../../actions/course_actions';
import CourseDetail from './course_detail';
import {selectCourseTagsNames, selectReviewsForCourse} from "../../reducers/selectors";
import {createRequest} from '../../actions/request_actions';
import {fetchUser, fetchUsers} from '../../actions/user_actions';



const mapStateToProps = (state, {match}) => {
  const currentUser = state.entities.users[state.session.currentUser.id];
  const courseId = parseInt(match.params.courseId);
  const course = state.entities.courses[courseId];
  const instructor = Object.keys(state.entities.users).length !== 0 ? state.entities.users[course.mentorId] : null ;
  const tags = selectCourseTagsNames(state);
  const reviews = selectReviewsForCourse(state, courseId);
  return {
    courseId, course, instructor, tags, currentUser, reviews
  }
}


const mapDispatchToProps = (dispatch) => ({
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
    createRequest: request => dispatch(createRequest(request)),
    fetchUser:(id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)