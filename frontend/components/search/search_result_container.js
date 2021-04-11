import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import SearchResult from './search_result';

const mapStateToProps = state => ({
    courses: asArray(state.entities),
})

export default connect(
  mapStateToProps
)(SearchResult);