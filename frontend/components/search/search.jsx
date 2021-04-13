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
        <div className="intro">
          <div className="intro-p intro-p1">Share experience you got </div>
          <div className="intro-p intro-p2">from your work experience </div>
          <div className="intro-p intro-p3">and get other's wisdom</div>
          <img className="intro-img" src="https://a0.muscache.com/im/pictures/59c2cdc5-c78c-48dc-8adf-647a62e77d75.jpg?im_w=1440"></img>
        </div>
      </div>
    )
  }
  
}


export default Search;
// <CourseIndex courses={courses} />