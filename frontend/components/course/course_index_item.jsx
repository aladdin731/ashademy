import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CourseIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const courseId = this.props.course.id;
    this.props.history.push(`/courses/${courseId}`);
  }

  render(){
    return(
      <li onClick={this.handleClick}>
          <img src={this.props.course.imageUrl}/>
          <h3>{this.props.course.courseName}</h3>
          <h3>Average Rating: {this.props.course.averageRating === 0 ? "No Rating Yet" : this.props.course.averageRating}</h3>
      </li>
    )
  }
}

export default withRouter(CourseIndexItem);