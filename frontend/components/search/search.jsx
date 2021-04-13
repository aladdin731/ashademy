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
        <div className="background-section">
          <img className="img home-img" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"></img>
          <h3 className="slogan">Switch Between Mentor and Mentee</h3>
        </div>
        
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