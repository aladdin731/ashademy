import React from 'react';

import FilterForm from './filter_form';



class Search extends React.Component{
  componentDidMount(){
    this.props.fetchCourses();
  }
  render(){
    const {ctype, updateFilter} = this.props;
    return(
      <div >
        <FilterForm
          ctype={ctype}
          updateFilter={updateFilter}
        />

      </div>
    )
  }
  
}


export default Search;
// <CourseIndex courses={courses} />