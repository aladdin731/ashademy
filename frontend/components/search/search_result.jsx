import React from 'react';
import CourseIndexItem from '../course/course_index_item';


class SearchResult extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if(this.props.currentUser) {
      this.props.fetchUser(this.props.currentUser.id)
    }else {
      this.props.fetchUsers()
    }
    this.props.fetchCourses()
  }

  render(){
    const {courses} = this.props;
    return(
      <div>
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


// const SearchResult = ({ courses }) => (
//   <div>
//     <h1>Courses You are interested in: </h1>
//     {courses.map(course => (
//       <CourseIndexItem
//         course={course}
//         key={course.id}
//       />
//     ))}
//   </div>
// );

export default SearchResult;
