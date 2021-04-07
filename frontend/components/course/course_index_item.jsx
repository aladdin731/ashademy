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
          <img src={this.props.course.imageUrl}/>
          <h3>{this.props.course.courseName}</h3>
        </Link>
      </li>
    )
  }
}

export default CourseIndexItem;