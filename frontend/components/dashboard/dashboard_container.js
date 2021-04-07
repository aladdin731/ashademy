import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import Dashboard from './dashboard';
import {selectCoursesForCurrentUser} from '../../reducers/selectors';


const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    // courses: Object.values(state.entities.courses),
    courses: selectCoursesForCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (currentUserId) => dispatch(fetchUser(currentUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

