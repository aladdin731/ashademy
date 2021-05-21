import {connect} from 'react-redux';
import {fetchCourse} from './../../actions/course_actions';
import CourseDetail from './course_detail';
import {selectCourseTagsNames, selectReviewsForCourse} from "../../reducers/selectors";
import {createRequest} from '../../actions/request_actions';
import {fetchUser, fetchUsers, fetchUsersThenCourse} from '../../actions/user_actions';
import { fetchReviews } from '../../actions/review_actions';


const mapStateToProps = (state, {match}) => {
  const currentUser = state.session.currentUser;
  const user = state.entities.users ? state.entities.users[currentUser.id] : null;
  const courseId = parseInt(match.params.courseId);
  const course = state.entities.courses? state.entities.courses[courseId] : null;
  const tags = selectCourseTagsNames(state);
  const reviews = selectReviewsForCourse(state, courseId);
  return {
    courseId, course, tags, currentUser, reviews, user
  }
}


const mapDispatchToProps = (dispatch) => ({
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
    createRequest: request => dispatch(createRequest(request)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchUsersThenCourse: courseId => dispatch(fetchUsersThenCourse(courseId))
})


export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)