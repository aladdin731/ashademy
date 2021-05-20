import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CourseIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.fetchUsers();
    const courseId = this.props.course.id;
    this.props.fetchCourse(courseId);
    this.props.history.push(`/courses/${courseId}`);
  }



  render(){
    let averageRating = Math.round(this.props.course.averageRating*10)/10;
    let time = this.props.course.reviewIds.length <= 1 ? "review" : "reviews"
    return(
      <li onClick={this.handleClick} className="searched-course">
          <img src={this.props.course.imageUrl} className="img course-img"/>
          <div className="course-sintro">
            <h2>{this.props.course.courseName}</h2>
            <span>{this.props.course.description} {time}</span>
            <p>&#127775;{this.props.course.averageRating === 0 ? "" : averageRating} ({this.props.course.reviewIds.length} {time})</p>
          </div>
      </li>
    )
  }
}

export default withRouter(CourseIndexItem);