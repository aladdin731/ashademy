import React from 'react';
import { Route, withRouter } from 'react-router-dom';


class CourseDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      start_time: "",
      end_time:"",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchCourse(this.props.courseId);
    this.props.fetchUser(this.props.currentUser.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const request = Object.assign({}, this.state, {
        course_id: this.props.courseId,
        mentee_id: this.props.currentUser.id
    })
    this.setState({
      start_time: "",
      end_time:"",
    })
    this.props.createRequest(request);
  }


  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }


  render(){
    if (!this.props.course || !this.props.instructor) return null;
    return (
      <section>
      <h3>Make Request</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Start Date
            <input
              type="date"
              value={this.state.start_time}
              onChange={this.update("start_time")} />
            <br/>
          </label>

          <label>End Date
            <input
                type="date"
                value={this.state.end_time}
                onChange={this.update("end_time")} />
              <br/>
          </label>
          <input type="submit" />
        </form>
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

export default CourseDetail;