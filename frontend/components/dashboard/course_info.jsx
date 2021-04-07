import React from 'react';
import { Link } from 'react-router-dom';

class CourseInfo extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    const {course, deleteCourse} = this.props;
    return(
        <div>
            <li>
            <img src={course.imageUrl}/>
            <h3>{course.courseName}</h3>
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
            </li>
        </div>
      
    )
  }
}

export default CourseInfo;