import React from 'react';
import CourseIndexItem from '../course/course_index_item';
import FilterForm from './filter_form';

class SearchResult extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchCourses();
    this.props.fetchReviews();
  }

  render(){
    const {ctype, updateFilter, courses, fetchCourses, fetchCourse, fetchUsers} = this.props;
    return(
      <div>
        <FilterForm
          ctype={ctype}
          updateFilter={updateFilter}
          fetchCourses={fetchCourses}
        />
        <div className="searched-course-section">
          <h1 className="searched-title">Courses you are interested in: </h1>
          <ul className="searched-courses">
            {courses.map(course => (
              <CourseIndexItem
                course={course}
                key={course.id}
                fetchCourse={fetchCourse}
                fetchUsers={fetchUsers}
              />
            ))}
          </ul>
          
        </div>
        
      </div>
    )
  }
}


export default SearchResult;
