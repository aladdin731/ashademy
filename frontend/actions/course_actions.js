import * as CourseAPI from '../util/course_api_util';


export const RECEIVE_ALL_COURSES = "RECEIVE_ALL_COURSES";
export const RECEIVE_COURSE = "RECEIVE_COURSE";
export const RECEIVE_COURSE_ERRORS = "RECEIVE_COURSE_ERRORS";
export const REMOVE_COURSE = "REMOVE_COURSE";

const receiveCourses = (courses) => ({
    type: RECEIVE_ALL_COURSES,
    courses
})

const receiveCourse = (payload) => ({
    type: RECEIVE_COURSE,
    payload
})

export const receiveCourseErrors = (errors) => ({
    type: RECEIVE_COURSE_ERRORS,
    errors
})

const removeCourse = courseId => ({
    type: REMOVE_COURSE,
    courseId 
})

export const fetchCourses = () => dispatch => 
    CourseAPI.fetchCourses().then((courses) => dispatch(receiveCourses(courses)))


// export const fetchCourse = (courseId) => dispatch => (
//     CourseAPI.fetchCourse(courseId).then((payload) => dispatch(receiveCourse(payload)))
// )
export const fetchCourse = (courseId) => (dispatch) => (
    CourseAPI.fetchCourse(courseId)
    .then(payload => {
        dispatch(receiveCourse(payload))
        return payload.course;
    })
    .fail(err => {
        dispatch(receiveCourseErrors(err.responseJSON))
    })
)

export const createCourse = (course) => (dispatch) => (
    CourseAPI.createCourse(course)
    .then(payload => {
        dispatch(receiveCourse(payload))
        return payload.course;
    })
    .fail(err => {
        dispatch(receiveCourseErrors(err.responseJSON))
    })
)

export const updateCourse = (course) => (dispatch) => (
    CourseAPI.updateCourse(course)
    .then(payload => {
        dispatch(receiveCourse(payload))
        return payload.course;
    })
    .fail(err => {
        dispatch(receiveCourseErrors(err.responseJSON))
    })
)

export const deleteCourse = (courseId) => dispatch => (
    CourseAPI.deleteCourse(courseId).then(() => dispatch(removeCourse(courseId)))
)