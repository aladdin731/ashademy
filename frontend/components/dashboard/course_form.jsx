import React from "react";
import { withRouter } from "react-router";

class CourseForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      course_name: "",
      description: "",
      course_type: "Frontend",
      image_url: "",
      tag_1: "",
      tag_2: "" ,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const mentorId = this.props.currentUser.id;
    const course = Object.assign({}, this.state, {
        mentor_id: mentorId
    })
    this.setState({
      course_name: "",
      description: "",
      course_type: "Frontend",
      image_url: "",
      tag_1: "",
      tag_2: "" ,
    })
    this.props.createCourse(course);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }


  render(){
    return (
    <div className="course-form">
      <form onSubmit={this.handleSubmit}>

        <input
          type="text"
          value={this.state.course_name}
          placeholder="Name"
          onChange={this.update("course_name")}
          className="input add-course-input"
        />

        <input
          type="text"
          value={this.state.image_url}
          placeholder="Image Url"
          onChange={this.update("image_url")}
          className="input add-course-input"
        />

        <select
          value={this.state.course_type}
          onChange={this.update("course_type")}
          className="input add-course-input"
        >
        {COURSE_TYPES.map((type, i) => {
          return (
          <option value={type} key={i}>
          {type}
          </option>
          );
        })}
        </select>

        <input
          type="text"
          value={this.state.description}
          placeholder="Description"
          onChange={this.update("description")}
          className="input add-course-input"
        />


        <input
          type="text"
          value={this.state.tag_1}
          placeholder="Tag 1"
          onChange={this.update("tag_1")}
          className="input add-course-input"
        />

        <input
          type="text"
          value={this.state.tag_2}
          placeholder="Tag 2"
          onChange={this.update("tag_2")}
          className="input add-course-input"
        />

        <button className="btn btn-profile">Create Course</button>

      </form>
    </div>
    );
  }
}

export default withRouter(CourseForm);