import React from 'react';
import CourseIndexItem from './course_index_item';

class CourseIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchCourses();
    this.props.fetchUsers();
  }
  
  render(){
    if(!this.props.courses) return null;
    return (
      <div >
        <ul>
          {
              this.props.courses.map(course => (
                  <CourseIndexItem key={course.id} course={course}/>))
          }
        </ul>
      </div>
    )
  }
}

export default CourseIndex;