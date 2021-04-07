import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import Dashboard from './dashboard';
import {selectCoursesForCurrentUser} from '../../reducers/selectors';
import {deleteCourse, fetchCourses} from '../../actions/course_actions';


const mapStateToProps = state => {
    const currentUser = state.session.currentUser;
    const courses = selectCoursesForCurrentUser(state, currentUser);
    return {
        currentUser, courses 
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: (currentUserId) => dispatch(fetchUser(currentUserId)),
    // fetchCourses: () => dispatch(fetchCourses()),
    deleteCourse: courseId => dispatch(deleteCourse(courseId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

