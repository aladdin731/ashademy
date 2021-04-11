import React from 'react';
import ReviewFormContainer from './review_form_container';
import { withRouter } from 'react-router-dom';

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
    const courseId = parseInt(this.props.match.params.courseId);
    this.props.fetchCourse(courseId);
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
    if(!this.props.instructor ||!this.props.reviews) return null;
    
    let requestForm;
    if(!this.props.currentUser) {
      requestForm = <p>Please log in to make request</p>
    }else if (this.props.instructor.id === this.props.currentUser.id){
      requestForm = <h3>This course is made by you!</h3> 
    }else {
      requestForm = (<div>
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

    let reviewForm;
    if(!this.props.currentUser) {
      reviewForm = ""
    }else if (this.props.instructor.id === this.props.currentUser.id){
      reviewForm = <h3>Look at the reviews of your course!</h3> 
    }else {
      reviewForm = <ReviewFormContainer />
    }
     
    return (
      <div>
        {requestForm}
        <figure>
          <img src={this.props.course.imageUrl} alt={this.props.course.courseName} />
        </figure>
        <ul>   
          <li><h2>{this.props.course.courseName}</h2></li>
          <li>Type: {this.props.course.courseType}</li>
          <li>Description: {this.props.course.description}</li>
          <li>Instructor: {this.props.instructor.username}</li>
          <img src={this.props.instructor.imageUrl} alt="no profile yet"></img>
          <li>Tags: {this.props.tags.join(' ')}</li>
          <li>Average Rating: {this.props.course.averageRating === 0 ? "No Rating Yet" : this.props.course.averageRating}</li>
        </ul>
        <div>
          <h3>Reviews</h3>
          <ul>
            {this.props.reviews.map((review,i) => 
              <li key={i}> 
                {review.body} by {review.author.username} 
                <img src={review.author.imageUrl} alt="no profile yet"></img>
                <p>Rating: {review.rating}</p>
              </li>
            )}
          </ul>
        </div>
        {reviewForm}
      </div>
    )
  }
}

export default withRouter(CourseDetail);


