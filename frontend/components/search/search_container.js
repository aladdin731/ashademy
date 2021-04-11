import { connect } from 'react-redux';
import {fetchCourses} from './../../actions/course_actions';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  courses: asArray(state.entities),
  ctype: state.ui.filters.ctype,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchCourses: () => dispatch(fetchCourses()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
