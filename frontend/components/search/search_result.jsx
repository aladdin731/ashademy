import React from 'react';
import CourseIndexItem from '../course/course_index_item';
import FilterForm from './filter_form';

class SearchResult extends React.Component{
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   // if(this.props.currentUser) {
  //   //   this.props.fetchUser(this.props.currentUser.id)
  //   // }else {
  //   //   this.props.fetchUsers()
  //   // }
  //   // this.props.fetchCourses()
  //   if(this.props.ctype) {
  //     this.props.fetchCourses()
  //   }
  // }

  render(){
    const {ctype, updateFilter, courses, fetchCourses} = this.props;
    return(
      <div>
        <FilterForm
          ctype={ctype}
          updateFilter={updateFilter}
          fetchCourses={fetchCourses}
        />
        <h1>Courses You are interested in: </h1>
        {courses.map(course => (
          <CourseIndexItem
            course={course}
            key={course.id}
          />
        ))}
      </div>
    )
  }
}


export default SearchResult;
