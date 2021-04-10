import React from 'react';

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
    if(this.props.currentUser) {
      this.props.fetchUser(this.props.currentUser.id)
    }else {
      this.props.fetchUsers()
    }
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
    alert("Submitted!")
  }


  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }


  render(){
    if(!this.props.instructor) return null;
    let form;
    if(!this.props.currentUser) {
      form = <p>Please log in to make request</p>
    }else if (this.props.instructor.id === this.props.currentUser.id){
      form = <h3>This course if made by you!</h3> 
    }else {
      form = (<div>
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
    </div>)
    }
     
    return (
      <section>
        {form}
        <figure>
          <img src={this.props.course.imageUrl} alt={this.props.course.courseName} />
        </figure>
        <ul>   
          <li><h2>{this.props.course.courseName}</h2></li>
          <li>Type: {this.props.course.courseType}</li>
          <li>Description: {this.props.course.description}</li>
          <li>Instructor: {this.props.instructor.username}</li>
          <li>Tags: {this.props.tags.join(' ')}</li>
          <li>Average Rating: {this.props.course.averageRating}</li>
        </ul>
        <div>
          <h3>Reviews</h3>
          <ul>
            {this.props.reviews.map(review => <li key={review.id}>{review.body} by {review.author.username}</li>)}
          </ul>
          
        </div>
      </section>
    )
  }
}

export default CourseDetail;


