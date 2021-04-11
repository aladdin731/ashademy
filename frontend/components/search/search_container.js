import { connect } from 'react-redux';
import {fetchCourses} from './../../actions/course_actions';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';



const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchCourses: () => dispatch(fetchCourses()),
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
