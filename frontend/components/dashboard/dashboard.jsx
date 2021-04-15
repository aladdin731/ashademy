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
        <div className="profile">
            <form onSubmit={this.addProfile}>
                <input className="input input-profile" type="text" value={this.state.imageUrl}  placeholder="Image Url" onChange={this.update("imageUrl")}/>
                <br></br>
                <button className="btn btn-profile">Confirm</button>
                <button className="btn btn-profile" onClick={this.originalProfile}>I want the original one</button>
            </form>
        </div> : ""

        
        return(
            <div className="dashboard">
                <div className="profile-section">
                     <img className="img profile-img" src={this.state.imageUrl} loading="lazy" alt="no profile yet" />
                     <div className="hello-change">
                        <p>Hi, {currentUser.username}</p>
                        <button className="btn btn-profile"  onClick={this.wannaChangeProfile}>Change Profile</button>
                        {photo}
                     </div>
                </div>
                
                <div className="request-section">
                    <h1>My Requests Status </h1>
                    <h3 className="no-request">
                        {requests.length === 0 ? "You did not make any request" : ""}
                    </h3>
                    <div className="table-section">
                        <table className="real-table">
                            <thead className="real-thead">
                                <tr>
                                    <th>Course</th>
                                    <th>Instructor</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((request,i) => (
                                    <tr>
                                        <td>{request.course}</td>
                                        <td>{request.receiver}</td>
                                        <td>{request.startTime}</td>
                                        <td>{request.endTime}</td>
                                        <td><p className={request.status === "PENDING" ? "status-pending" : (request.status === "APPROVED" ? "status-approve" : "status-deny")}>{request.status}</p></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className="received-request-section">
                    <h1>Received Requests</h1>
                    <h3 className="no-request">
                        {receivedRequests.length === 0 ? "You did not receive any request" : ""}
                    </h3>
                    <div className="table-section">
                        <table className="real-table">
                            <thead className="real-thead">
                                <tr>
                                    <th>Course</th>
                                    <th>Mentee</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                    <th>Decision</th>
                                </tr>
                            </thead>
                            <tbody>
                                {receivedRequests.map((request,i) => (
                                    <tr>
                                        <td>{request.course}</td>
                                        <td>{request.sender}</td>
                                        <td>{request.startTime}</td>
                                        <td>{request.endTime}</td>
                                        <td><p className={request.status === "PENDING" ? "status-pending" : (request.status === "APPROVED" ? "status-approve" : "status-deny")}>{request.status}</p></td>
                                        <td>
                                            {request.status === "PENDING" ? 
                                            (<span className="request-decision">
                                                <button className="btn btn-request" onClick={() => updateRequest({id:request.id, status:"APPROVED"})}>Accept</button>
                                                <button className="btn btn-request" onClick={() => updateRequest({id:request.id, status:"DENIED"})}>Deny</button>
                                            </span>
                                            ) : "" 
                                            }  
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                               
                <div className="course-add-course">
                    <h1>Courses</h1>
                    <ul className="courses-section">
                        {courses.map(course => (
                            <li className="course-block" key={course.id}>
                                <img className="img course-img" src={course.imageUrl}/>
                                <div className="course-delete">
                                    <h3 className="course-title">{course.courseName}</h3>
                                    <button className="btn btn-profile" onClick={() => deleteCourse(course.id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="add-course">
                        <button className="btn btn-add-course" onClick={this.handleClick}>Add Course</button> 
                        {form}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
    // <div>
    //     {request.status === "PENDING" ? 
    //     (<span className="request-decision">
    //         <button className="btn btn-request" onClick={() => updateRequest({id:request.id, status:"APPROVED"})}>Accept</button>
    //         <button className="btn btn-request" onClick={() => updateRequest({id:request.id, status:"DENIED"})}>Deny</button>
    //     </span>
    //     ) : "" 
    //     }  
    // </div>