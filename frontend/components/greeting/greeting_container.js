import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';
import {fetchCourses} from '../../actions/course_actions'
import {updateFilter} from '../../actions/filter_actions';

const mapStateToProps = ({ session}) => ({
    currentUser: session.currentUser 
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: (currentUserId) => fetchUser(currentUserId),
  openModal: modal => dispatch(openModal(modal)),
  fetchCourses: () => dispatch(fetchCourses()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
