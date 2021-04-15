import {connect} from 'react-redux';
import {fetchUser, updateUserInfo} from '../../actions/user_actions'
import Dashboard from './dashboard';
import {selectCoursesForCurrentUser, selectRequestsForCurrentUser, selectReceivedRequestsForCurrentUser} from '../../reducers/selectors';
import {deleteCourse, fetchCourses} from '../../actions/course_actions';
import {updateRequest} from '../../actions/request_actions';


const mapStateToProps = state => {
    const currentUser = state.entities.users[state.session.currentUser.id];
    const courses = selectCoursesForCurrentUser(state, currentUser);
    const requests = selectRequestsForCurrentUser(state, currentUser);
    const receivedRequests = selectReceivedRequestsForCurrentUser(state, currentUser);
    return {
        currentUser, courses, requests, receivedRequests
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: (currentUserId) => dispatch(fetchUser(currentUserId)),
    deleteCourse: courseId => dispatch(deleteCourse(courseId)),
    updateUserInfo: user =>dispatch(updateUserInfo(user)),
    updateRequest: request => dispatch(updateRequest(request)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

