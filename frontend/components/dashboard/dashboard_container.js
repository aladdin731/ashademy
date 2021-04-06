import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import Dashboard from './dashboard';


const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    courses: Object.values(state.entities.courses),
    
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (currentUserId) => fetchUser(currentUserId)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)