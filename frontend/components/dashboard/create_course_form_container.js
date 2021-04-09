import { connect } from "react-redux";
import { createCourse } from "../../actions/course_actions";
import CourseForm from './course_form';
import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
})


const mapDispatchToProps = dispatch => ({
    createCourse: (course) => dispatch(createCourse(course)),
    // fetchUser: (id) => dispatch(fetchUser(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm);