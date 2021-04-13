import React from 'react';

import FilterForm from './filter_form';
import TypeItem from './type_item'


class Search extends React.Component{



  render(){
    const {ctype, updateFilter, fetchCourses} = this.props;
    return(
      <div className="search-page">
        <FilterForm
          ctype={ctype}
          updateFilter={updateFilter}
          fetchCourses={fetchCourses}
        />
        <img className="img home-img" src="https://a0.muscache.com/im/pictures/1c18c4c8-5ecb-4a94-9301-1e02b061339b.jpg?im_w=1440"></img>
        <h3 className="slogan">Switch Between Mentor and Mentee</h3>
        <div className="explore">
          <h1>Explore diffent types of courses</h1>
          <ul className="types">
            {COURSE_TYPES.map((type, i) => <TypeItem type={type} key={i} updateFilter={updateFilter}/>)}
          </ul>
        </div>
      </div>
    )
  }
  
}


export default Search;
// <CourseIndex courses={courses} />