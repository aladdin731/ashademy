import React from 'react';
import { Route, withRouter } from 'react-router-dom';


class CourseDetail extends React.Component{

  componentDidMount(){
    this.props.fetchCourse(this.props.match.params.courseId);
  }


  render(){
    if (!this.props.instructor) return null;
    return (
      <section>
        <figure>
          <img src={this.props.course.imageUrl} alt={this.props.course.courseName} />
        </figure>
        <ul>   
          <li><h2>{this.props.course.courseName}</h2></li>
          <li>Type: {this.props.course.courseType}</li>
          <li>Description: {this.props.course.description}</li>
          <li>Instructor: {this.props.instructor.username}</li>
          <li>Tags: {this.props.tags.join(' ')}</li>
        </ul>
      </section>
    )
  }
}

export default withRouter(CourseDetail);