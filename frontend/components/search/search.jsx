import React from 'react';

import FilterForm from './filter_form';



class Search extends React.Component{



  render(){
    const {ctype, updateFilter, fetchCourses} = this.props;
    return(
      <div >
        <FilterForm
          ctype={ctype}
          updateFilter={updateFilter}
          fetchCourses={fetchCourses}
        />
      </div>
    )
  }
  
}


export default Search;
// <CourseIndex courses={courses} />