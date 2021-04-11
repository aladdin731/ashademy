import React from 'react';

import FilterForm from './filter_form';
import CourseIndex from './course_index';


class Search extends React.Component{
  componentDidMount(){
    this.props.fetchCourses();
  }
  render(){
    const { courses, ctype, updateFilter } = this.props;
    return(
      <div >
        <FilterForm
          ctype={ctype}
          updateFilter={updateFilter}
        />
        <CourseIndex courses={courses} />
      </div>
    )
  }
  
}


export default Search;
