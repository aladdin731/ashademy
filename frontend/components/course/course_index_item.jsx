import React from 'react';
import { Link } from 'react-router-dom';

class CourseIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li >
        <Link to={`/courses/${this.props.course.id}`}>
          <span>{this.props.course.id}</span>
          <img src={this.props.course.imageUrl}/>
          <span>{this.props.course.course_name}</span>
        </Link>
      </li>
    )
  }
}

export default CourseIndexItem;