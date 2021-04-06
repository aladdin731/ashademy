import React from 'react';
import CourseIndexItem from '../course/course_index_item'

class Dashboard extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser.id)
    }

    render(){
        if (!this.props.courses) return null;
        const{courses, currentUser} = this.props;
        return(
            <div>
                {
                    this.props.courses.map(course => (
                  <CourseIndexItem key={course.id} course={course}/>))
                }
            </div>
        )
    }
}

export default Dashboard;