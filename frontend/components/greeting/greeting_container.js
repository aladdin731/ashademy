import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session}) => {
  return {
    currentUser: session.currentUser 
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  // fetchUser: (currentUserId) => fetchUser(currentUserId)
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
