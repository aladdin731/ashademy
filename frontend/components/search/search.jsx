import React from 'react';

import FilterForm from './filter_form';
import TypeItem from './type_item'


class Search extends React.Component{

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchCourses();
    this.props.fetchReviews();
    this.props.fetchRequests();
  }


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
          <img className="img home-img" src="https://a0.muscache.com/im/pictures/166791ff-bc82-4b88-ba3d-49be1d462dce.jpg?im_w=2560"></img>
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
          <div className="intro-p intro-p2">from your work </div>
          <div className="intro-p intro-p3">and get other's wisdom</div>
          <img className="intro-img" src="https://a0.muscache.com/im/pictures/48893cdc-221e-4eaf-b624-8956600550db.jpg?im_w=2560"></img>
        </div>
      </div>
    )
  }
  
}


export default Search;
