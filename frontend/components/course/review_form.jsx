import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchCourse(this.props.match.params.courseId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const courseId = parseInt(this.props.match.params.courseId);
    const review = Object.assign({}, this.state, {
      course_id: courseId, reviewer_id: this.props.currentUser.id 
    });
    this.setState({
      rating: 5,
      body:"",
    })
    
    this.props.createReview(review);
    // this.props.fetchCourse(courseId);
    // this.props.fetchUser(this.props.currentUser.id);
    // this.props.fetchUsers();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <h1>Leave Review or Questions</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="review-col">Rating</label>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
            className="input review-input"
          />

          <label className="review-col">Comment</label>
          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
            className="input review-input"
          />
          <br/>
          <input className="btn review-btn" type="submit" />
        </form>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
