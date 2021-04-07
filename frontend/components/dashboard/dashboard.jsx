import React from 'react';
import CourseInfo from './course_info';
import CreateCourseFormContainer from './create_course_form_container';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addCourse: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser.id);
    }

    handleClick(e){
        e.preventDefault();
        this.setState({
            addCourse: !this.state.addCourse 
        })
    }

    render(){
        if(!this.props.currentUser || !this.props.courses) return null;
        const form = this.state.addCourse ? <CreateCourseFormContainer /> : ""
        const {currentUser, courses, deleteCourse, updateUserInfo} = this.props;
        let photo;
        if (!currentUser.imageUrl){
            photo = <button>Add a photo</button>
        }else {
            photo = <img src={currentUser.imageUrl} alt={currentUser.username} />
        }
        return(
            <div>
                {photo} 
                {
                courses.map(course => (
                    <li key={course.id}>
                        <img src={course.imageUrl}/>
                        <h3>{course.courseName}</h3>
                        <button onClick={() => deleteCourse(course.id)}>Delete</button>
                    </li>
                 ))
                }
                <button onClick={this.handleClick}>Add Course</button>
                {form}
            </div>
        )
    }
}

export default Dashboard;