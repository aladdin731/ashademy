import React from 'react';

import FilterForm from './filter_form';
import TypeItem from './type_item'


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

        <div>
          <ul>
            {COURSE_TYPES.map((type, i) => <TypeItem type={type} key={i} updateFilter={updateFilter}/>)}
          </ul>
        </div>
      </div>
    )
  }
  
}


export default Search;
// <CourseIndex courses={courses} />