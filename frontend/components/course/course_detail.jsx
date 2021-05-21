import React from 'react';
import ReviewFormContainer from './review_form_container';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../util/user_api_util';

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
        // this.props.fetchUsersThenCourse(courseId);
        this.props.fetchCourses();
        this.props.fetchUsers();
        setTimeout(() => this.props.fetchCourse(courseId),200)
        this.props.fetchReviews();
  }

  componentDidUpdate(prevState){
    if (prevState.reviews.length !== this.props.reviews.length){
      this.props.fetchUsers();
      this.props.fetchCourse(this.props.match.params.courseId);
      this.props.fetchReviews();
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
  }


  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }


  render(){
    if(!this.props.course ||!this.props.reviews) return null;
    
    let requestForm;
    if(!this.props.currentUser) {
      requestForm = <p className="no-request-form">Please log in to make request</p>
    }else if (this.props.course.instructor.id === this.props.currentUser.id){
      requestForm = <h3 className="no-request-form">This course is made by you!</h3> 
    }else {
      requestForm = (<div className="request-form">
      <h3 className="make-request-title">Make Request</h3>
        <form onSubmit={this.handleSubmit}>
          <label className="date">Start Date
            <input
              type="date"
              value={this.state.start_time}
              onChange={this.update("start_time")}
              className="input request-input" />
            <br/>
          </label>

          <label className="date">End Date
            <input
                type="date"
                value={this.state.end_time}
                onChange={this.update("end_time")}
                className="input request-input" />
              <br/>
          </label>
          <input className="btn btn-request" type="submit" />
        </form>
    </div>)
    }

    let reviewForm;
    if(!this.props.currentUser) {
      reviewForm = ""
    }else if (this.props.course.instructor.id === this.props.currentUser.id){
      reviewForm = <h3 className="no-review-form">Look at the reviews of your course!</h3> 
    }else {
      reviewForm = <ReviewFormContainer />
    }

    let averageRating = Math.round(this.props.course.averageRating*10)/10;
     
    return (
      <div className="course-detail-page">
        <h2 className="course-name">{this.props.course.courseName}</h2>
        <div className="course-detail">
          <img className="img course-detail-img" src={this.props.course.imageUrl} alt={this.props.course.courseName} />
          {requestForm}
        </div>
        <div className="course-detail-info">   
          <div className="author-section">
            <span className="author-info">{this.props.course.courseName} by {this.props.course.instructor.username}</span>
            <img className="img profile-img" src={this.props.course.instructor.imageUrl} alt="no profile yet"></img>
          </div>
          <div className="course-info">
            <p>&#128655;: {this.props.course.courseType}</p>
            <p>&#9999;: {this.props.course.description}</p>
            <p>&#127991;: {this.props.tags.join(' ')}</p>
            <p>&#127775;: {this.props.course.averageRating === 0 ? "No Rating Yet" : averageRating}</p>
          </div>
        </div>

        <div className="review-section">
          <h1 className="review-title">Reviews</h1>
          <h3 className="no-review-form">
            {
            this.props.reviews.length === 0 ? "No Review Yet" : ""
            }
          </h3>
          
          <ul className="reviews">
            {this.props.reviews.map((review,i) => 
              <li className="review-info" key={i}> 
                <div className="reviewer-info">
                  <img className="img profile-img" src={review.author.imageUrl} alt="no profile yet"></img>
                  <div className="reviewer-time">
                      <span className="reviewer-name">{review.author.username} </span>
                      <span className="reviewer-name">{review.createdAt.slice(0,10)} </span>
                  </div>
                </div>
                <div className="review-body">
                  <p>{review.body}</p>
                  <p>	&#127775;: {review.rating}</p>
                </div>
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


