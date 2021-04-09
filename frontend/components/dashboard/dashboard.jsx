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
        // this.acceptRequest(e, id) = this.acceptRequest(e, id).bind(this);
        // this.denyRequest(e, id) = this.denyRequest(e, id).bind(this);
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

    // acceptRequest(e, id){
    //     e.preventDefault();
    //     this.props.updateRequest({id: id, status:"APPROVED"})
    // }


    // denyRequest(e, id){
    //     e.preventDefault();
    //     this.props.updateRequest({id: id, status:"DENIED"})
    // }

    render(){
        if(!this.props.courses || !this.props.requests || !this.props.receivedRequests) return null;
        const form = this.state.addCourse ? <CreateCourseFormContainer /> : ""
        const {currentUser, courses, deleteCourse, updateUserInfo, updateRequest, requests, receivedRequests} = this.props;
        let photo;
        if (!currentUser.imageUrl){
            photo = <button>Add a photo</button>
        }else {
            photo = <img src={currentUser.imageUrl} alt={currentUser.username} />
        }
        return(
            <div>
                {photo} 
                <div>
                    {courses.map(course => (
                        <li key={course.id}>
                            <img src={course.imageUrl}/>
                            <h3>{course.courseName}</h3>
                            <button onClick={() => deleteCourse(course.id)}>Delete</button>
                        </li>
                    ))}
                    <button onClick={this.handleClick}>Add Course</button>
                    {form}
                </div>
                <div>
                    <h1>My requests status </h1>
                    {requests.map(request => (
                        <li key={request.id}>
                            <h3>Start From: {request.startTime}</h3>
                            <h3>End To: {request.endTime}</h3>
                            <h3>End To: {request.status}</h3>
                        </li>
                    ))}
                </div>
                <div>
                    <h1>Received requests to deal with </h1>
                    {receivedRequests.map(request => (
                        <li key={request.id}>
                            <h3>Start From: {request.startTime}</h3>
                            <h3>End To: {request.endTime}</h3>
                            <h3>End To: {request.status}</h3>
                            {request.status === "PENDING" ? 
                                (<div>
                                    <button onClick={() => updateRequest({id:request.id, status:"APPROVED"})}>Accept</button>
                                    <button onClick={() => updateRequest({id:request.id, status:"DENIED"})}>Deny</button>
                                </div>
                                ) : "" 
                            }  
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}

export default Dashboard;

