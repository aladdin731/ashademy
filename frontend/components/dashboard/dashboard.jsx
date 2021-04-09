import React from 'react';
import CourseInfo from './course_info';
import CreateCourseFormContainer from './create_course_form_container';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addCourse: false,
            imageUrl: this.props.currentUser.imageUrl,
            wantToChangeProfile: false,
            currentUser: this.props.currentUser,
            originalUrl:this.props.currentUser.imageUrl
        }
        this.handleClick = this.handleClick.bind(this);
        this.addProfile = this.addProfile.bind(this);
        this.wannaChangeProfile = this.wannaChangeProfile.bind(this);
        this.originalProfile = this.originalProfile.bind(this)
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

    wannaChangeProfile(e){
        e.preventDefault();
        this.setState({
            wantToChangeProfile: !this.state.wantToChangeProfile
        })
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    addProfile(e){
        e.preventDefault();
        this.props.updateUserInfo({id: this.state.currentUser.id, image_url:this.state.imageUrl})
        this.setState({
            wantToChangeProfile: !this.state.wantToChangeProfile
        })
    }

    originalProfile(){
        this.setState({
            imageUrl: this.state.originalUrl,
            wantToChangeProfile: !this.state.wantToChangeProfile
        })
    }

    render(){
        if(!this.props.courses || !this.props.requests || !this.props.receivedRequests) return null;
        const form = this.state.addCourse ? <CreateCourseFormContainer /> : ""
        const {currentUser, courses, deleteCourse, updateRequest, requests, receivedRequests} = this.props;
        const photo = this.state.wantToChangeProfile ? 
        <div>
            <form onSubmit={this.addProfile}>
                <input type="text" value={this.state.imageUrl}  placeholder="Image Url" onChange={this.update("imageUrl")}/>
                <button>Confirm</button>
            </form>
            <button onClick={this.originalProfile}>Don't want to change</button>
        </div> : ""
        
        return(
            <div>
                <img src={this.state.imageUrl} loading="lazy" alt="no profile yet" />
                <button onClick={this.wannaChangeProfile}>Change Profile</button>
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
