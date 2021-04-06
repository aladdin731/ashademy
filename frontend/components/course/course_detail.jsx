import React from 'react';
import { Route } from 'react-router-dom';


class CourseDetail extends React.Component{

  componentDidMount(){
    this.props.fetchCourse(this.props.match.params.courseId);
  }

//   componentDidUpdate(prevProps){
//     if (prevProps.match.params.courseId !== this.props.match.params.pokemonId){
//       this.props.requestSinglePokemon(this.props.match.params.pokemonId)
//     }
//   }

  render(){
    if (!this.props.course) return null;
    return (
      <section>
        <figure>
          <img src={this.props.course.imageUrl} alt={this.props.course.course_name} />
        </figure>
        <ul>   
          <li><h2>{this.props.course.courseName}</h2></li>
          <li>Type: {this.props.course.course_type}</li>
          <li>Description: {this.props.course.description}</li>
          <li>Instructor: {this.props.instructor.join("")}</li>
          <li>Tags: {this.props.tags.join(', ')}</li>
        </ul>
      </section>
    )
  }
}

export default CourseDetail;